import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NewFolder = (props) => {
  const [category, setCategory] = useState("");

  const uploadFolder = () => {
    axios.post("/api/folder/new", { category });
    setCategory("");
    props.history.goBack();
  };

  return (
    <div>
      <div>
        <p>New Folder</p>
      </div>
      <input
        type="text"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={() => uploadFolder()}>Upload New Folder</button>
    </div>
  );
};

export default withRouter(NewFolder);
