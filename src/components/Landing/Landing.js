import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blocks from '../Blocks/Blocks'
import {Link} from 'react-router-dom'

const Landing = (props) => {

    const [folders, setFolders] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getFolders()
    }, [])


    const getFolders = () => {
        axios.get(`/api/folder/?search=${search}`)
        .then(res => setFolders(res.data))
    }


    return(
        <div>
            
            <input type="text" name="search" onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={() => getFolders()}>Search</button>
            <Link to="/NewFolder"><button>New Folder</button></Link>

            



        {folders.map(e => {
            return(
                <Blocks 
                folder = {e}
                category={e.category}


                />
            )
        })}


        </div>
    )


}

export default Landing