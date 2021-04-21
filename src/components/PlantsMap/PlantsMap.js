import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/PlantsMap.css";

const PlantsMap = (props) => {
  const deletePlant = () => {
    axios
      .delete(`/api/plants/delete/${props.plant_id}`)
      .then((res) => props.setPlants(res.data));
  };
  // Pushes to specific plant page to see that plants info
  const openPLant = () => {
    props.history.push(`/InPlant/${props.plant_id}`);
  };

  return (
    <div className="plant-map-container">
      <button class="plant-button" onClick={() => openPLant()}>
        <div class="plant-text">
          <img class="image" src={props.plant_image} alt="" />

          <div class="text-total">
            <p class="card-type">Plant</p>
            <h2>{props.plant_name}</h2>
          </div>
        </div>
      </button>

      <button onClick={() => deletePlant()}>X</button>
    </div>
  );
};

export default withRouter(PlantsMap);
