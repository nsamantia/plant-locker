import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/style.css";

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
      <button className="plant-button" onClick={() => openPLant()}>
        <p>{props.plant_name}</p>
        <img src={props.plant_image} alt="" />
      </button>
      <button onClick={() => deletePlant()}>X</button>
    </div>
  );
};

export default withRouter(PlantsMap);
