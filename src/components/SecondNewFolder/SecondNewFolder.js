import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getFolder } from "../../ducks/folderReducer";

const SecondNewFolder = (props) => {
  const [category, setCategory] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [folder, setFolder] = useState(props.folder.folder);

  console.log(folder);

  const newFolder = () => {
    axios.post(`/api/folder/second/new/${folder}`, { category });
    setCategory("");
    setCategoryImage("");
    props.history.goBack();
  };

  console.log(folder);
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

      <button onClick={() => newFolder()}>Upload New Folder</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(
  withRouter(SecondNewFolder)
);
