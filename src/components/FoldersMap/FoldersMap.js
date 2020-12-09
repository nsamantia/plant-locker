import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getFolder} from '../../ducks/folderReducer'


const FoldersMap = (props) => {

    
    // console.log(props.category_id)

    const getFolderOne = () => {
        props.history.push(`/InFolder/${props.category_id}`)
        props.getFolder(props.category_id)
    }


    const deleteFolder = () => {
        axios.delete(`/api/folder/delete/${props.category_id}`)
        .then(res => props.setFolders(res.data))
    }
    

    return(
        <div>
            <button onClick={()=> getFolderOne() }>
                <p>{props.category}</p>

            </button>
            <button onClick={()=>deleteFolder()}>X</button>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(withRouter(FoldersMap))