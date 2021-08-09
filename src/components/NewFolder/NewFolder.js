import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NewFolder = (props) => {
  const [category, setCategory] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const uploadFolder = () => {
    axios.post("/api/folder/new", { category, categoryImage });
    setCategory("");
    setCategoryImage("");
    props.history.goBack();
  };

  return (
    <div>
      <div>
        <p>New Folder</p>
      </div>
      <label>
        Folder Name:
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>

      <label>
        Image Link:
        <input
          type="text"
          name="image"
          onChange={(e) => setCategoryImage(e.target.value)}
        />
      </label>

      <button onClick={() => uploadFolder()}>Upload New Folder</button>
      <img src={categoryImage} alt="" />
    </div>
  );
};

export default withRouter(NewFolder);
