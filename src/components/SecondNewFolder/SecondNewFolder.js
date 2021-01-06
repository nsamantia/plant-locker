import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getFolder} from '../../ducks/folderReducer'


const SecondNewFolder = (props) => {

    const [category, setCategory] = useState('')
    const [folder, setFolder] = useState(props.folder.folder)

    const newFolder = () => {
        axios.post(`/api/folder/second/new/${folder}`, {category})
    }
    

    console.log(folder)
    return(
        <div>
            <div>
                <p>New Folder</p>
            </div>
            <input type="text" name="category" onChange={(e)=>setCategory(e.target.value)}/>
            <Link to="/InFolder"><button onClick={() => newFolder()}>Upload New Folder</button></Link>

        </div>
    )

}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getFolder})(SecondNewFolder)