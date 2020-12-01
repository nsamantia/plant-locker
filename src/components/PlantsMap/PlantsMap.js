import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const PlantsMap = (props) => {
    
    const deleteFolder = () => {
        axios.delete('/api/plants/delete')
    }

    return(
        <div>

        </div>

    )
}

export default (PlantsMap)