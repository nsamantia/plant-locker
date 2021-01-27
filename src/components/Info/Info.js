import React, { useState, useEffect } from "react";
import "../../scss/main.scss";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="info-container">
      <div className="bg-image"></div>

      <h1>Plant Locker</h1>
      <h2>Digital storage for your plants</h2>
      <p>
        This app was created with the purpose of reducing plastic building up in
        landfills and spilling over into habitats. Gardening is a productive
        hobby and a great way to contribute to creating biodiversity in your
        yard. Unfortunately, there is a lot of plastic involved in gardening and
        I hope to eliminate plastic id tags by giving people the opportunity to
        store their plant information digitally.
      </p>

      <div>
        <div className="button-container">
          <Link to="/Login">
            <button>Sign In</button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
