import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


const Blocks = (props) => {

    
    // console.log(props.category_id)


    const deleteFolder = () => {
        axios.delete(`/api/folder/delete/${props.category_id}`)
        
    }
    

    return(
        <div>
            <button>
                <p>{props.category}</p>

            </button>
            <button onClick={()=>deleteFolder()}>X</button>
        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Blocks)