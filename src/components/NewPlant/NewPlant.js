import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getFolder } from "../../ducks/folderReducer";

const NewPlant = (props) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [folder, setFolder] = useState(props.folder.folder);

  useEffect(() => {}, [selectedFile]);

  const uploadPlant = () => {
    axios.post(`/api/plants/new/${folder}`);
  };

  return (
    <div>
      <h1>Upload a New Plant</h1>
      <input
        type="file"
        onChange={(e) =>
          setSelectedFile(URL.createObjectURL(e.target.files[0]))
        }
      />
      <img src={selectedFile} alt="uploaded plant" />
    </div>
  );
};
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(NewPlant);
