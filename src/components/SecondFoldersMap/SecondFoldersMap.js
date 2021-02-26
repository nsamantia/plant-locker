import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFolder } from "../../ducks/folderReducer";

const SecondFoldersMap = (props) => {
  console.log(props.category_id);
  const getFolderTwo = () => {
    props.history.push(`/InSecondFolder/${props.category_id}`);
    // props.getFolder(props.category_id)
    // getFolder()
  };

  const deleteFolder = () => {
    axios
      .delete(`/api/second/folder/delete/${props.category_id}`)
      .then((res) => props.setFolders(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={() => getFolderTwo()}>
        <p>{props.category}</p>
      </button>
      <button onClick={() => deleteFolder()}>X</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(
  withRouter(SecondFoldersMap)
);
