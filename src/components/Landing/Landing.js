import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Blocks from '../Blocks/Blocks'

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
            Landing.js



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