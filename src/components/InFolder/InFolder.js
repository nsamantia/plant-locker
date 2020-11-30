import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blocks from '../Blocks/Blocks'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



const InFolder = () =>{

    const [folders, setFolders] = useState([])
    const [plants, setPlants] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        getFolders()
        getPlants()
    }, [folders, plants])

    const getFolders = () => {

            axios.get('/api/folder/second')
            .then(res => setFolders(res.data))

    }

    const getPlants = () => {
        axios.get('/api/plants')
        .then(res => setPlants(res.data))
    }


    return(

        <div>
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getFolders()}>Search</button>
            <Link to="/NewFolder"><button>New Folder</button></Link>

        </div>

    )
}
const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(InFolder)