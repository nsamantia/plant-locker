import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/PlantsMap.css";

const SecondPlantsMap = (props) => {
  const deletePlant = () => {
    axios
      .delete(`/api/plants/second/delete/${props.plant_id}`)
      .then((res) => props.setPlants(res.data));
  };
  // Pushes to specific plant page to see that plants info
  const openPLant = () => {
    props.history.push(`/SecondInPlant/${props.plant_id}`);
  };

  return (
    <div className="plant-map-container">
      <button class="plant-button" onClick={() => openPLant()}>
        <img class="image" src={props.plant_image} alt="" />
        <p class="card-type">Plant</p>
        <p class="plant-name">{props.plant_name}</p>
      </button>

      <button class="delete-button" onClick={() => deletePlant()}>
        X
      </button>
    </div>
  );
};

export default withRouter(SecondPlantsMap);
