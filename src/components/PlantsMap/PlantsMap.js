import React from 'react'
import axios from 'axios'
import '../../scss/_plants-map.scss'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

const PlantsMap = (props) => {
    
    const deletePlant = () => {
        axios.delete(`/api/plants/delete/${props.plant_id}`)
        .then(res => props.setPlants(res.data))
    }



    return(
        <div className="plant-map-container">
            <button className="plant-button">
                <p>{props.plant_name}</p>
                <img src={props.plant_image} />

            </button>
            <button onClick={() => deletePlant()}>X</button>

        </div>

    )
}

export default (PlantsMap)