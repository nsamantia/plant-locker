import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFolder } from "../../ducks/folderReducer";
import "../../css/FoldersMap.css";

const FoldersMap = (props) => {
  console.log(props.category_id);

  // Pushes to specific folder page - "opens" that folder
  const getFolderOne = () => {
    props.history.push(`/InFolder/${props.category_id}`);
    props.getFolder(props.category_id);
  };
  // Deletes single folder
  const deleteFolder = () => {
    axios
      .delete(`/api/folder/delete/${props.category_id}`)
      .then((res) => props.setFolders(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="folder-map-container">
      <button className="folder-button" onClick={() => getFolderOne()}>
        <p className="folder-card-type">Folder</p>
        <p className="folder-category">{props.category}</p>
        <img classname="folder-image" src={props.categoryImage} alt="" />
      </button>
      <button className="folder-delete-button" onClick={() => deleteFolder()}>
        X
      </button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(withRouter(FoldersMap));
