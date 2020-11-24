import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const NewFolder = () => {

    const [category, setCategory] = useState('')

    const newFolder = () => {
        axios.post('/api/folder/new', {category})
    }
    


    return(
        <div>
            <div>
                <p>New Folder</p>
            </div>
            <input type="text" name="category" onChange={(e)=>setCategory(e.target.value)}/>
            <Link to="/Landing"><button onClick={() => newFolder()}>Upload New Folder</button></Link>

        </div>
    )

}

export default NewFolder