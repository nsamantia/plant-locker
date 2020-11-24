import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blocks from '../Blocks/Blocks'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const InFolder = () =>{

    const [folders, setFolders] = useState([])
    const [plants, setPlants] = useState([])
    const [serch, setSearch] = useState([])

    const getFolders = () => {

            axios.get('/api/folder/second')
            .then(res => {setFolders(res.data)})

    }

    const getPlants = () => {

    }


    return(

        <div>
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getFolders()}>Search</button>
            <Link to="/NewFolder"><button>New Folder</button></Link>

        </div>

    )
}

export default InFolder