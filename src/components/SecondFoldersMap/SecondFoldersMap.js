import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFolder } from "../../ducks/folderReducer";
import "../../css/FoldersMap.css";

const SecondFoldersMap = (props) => {
  const getFolderTwo = () => {
    props.history.push(`/InSecondFolder/${props.category_id}`);
    props.getFolder(props.category_id);
  };
  // Deletes single folder
  const deleteFolder = () => {
    axios
      .delete(`/api/folder/second/delete/${props.category_id}`)
      .then((res) => props.setFolders(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="folder-map-container">
      <button className="folder-button" onClick={() => getFolderTwo()}>
        <img className="folder-image" src={props.category_image} alt="" />
        <p className="folder-card-type">Folder</p>
        <p className="folder-category">{props.category}</p>
      </button>
      <button className="folder-delete-button" onClick={() => deleteFolder()}>
        X
      </button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(
  withRouter(SecondFoldersMap)
);
