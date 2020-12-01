import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'


const FoldersMap = (props) => {

    
    // console.log(props.category_id)


    const deleteFolder = () => {
        axios.delete(`/api/folder/delete/${props.category_id}`)
        .then(res => props.setFolders(res.data))

        
        
    }
    

    return(
        <div>
            <button onClick={()=> props.history.push(`/InFolder/${props.category_id}`)}>
                <p>{props.category}</p>

            </button>
            <button onClick={()=>deleteFolder()}>X</button>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(withRouter(FoldersMap))