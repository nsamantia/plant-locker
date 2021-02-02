import React, { useState, useEffect } from "react";
import "../../scss/main.scss";
import { Link } from "react-router-dom";
import wfh_8 from "../../assets/wfh_8.svg";
const Info = () => {
  return (
    <div className="info-container">
      <h1>Plant Locker</h1>
      <h2>Digital storage for your plants</h2>
      <div className="bg-image-container">
        <img className="bg-image" src={wfh_8} alt="woman with plant" />
      </div>
      <p>
        This app was created with the purpose of reducing plastic building up in
        landfills and spilling over into habitats. Gardening is a productive
        hobby and a great way to contribute to creating biodiversity in your
        yard. Unfortunately, there is a lot of plastic involved in gardening and
        I hope to eliminate plastic id tags by giving people the opportunity to
        store their plant information digitally.
      </p>

      <div className="button-container">
        <div className="info-button">
          <Link to="/Login">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="info-button">
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
