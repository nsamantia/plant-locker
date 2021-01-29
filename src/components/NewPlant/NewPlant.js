import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getFolder } from "../../ducks/folderReducer";

const NewPlant = (props) => {
  let [plantImage, setPlantImage] = useState("");
  let [plant, setPlant] = useState("");
  let [plantComment, setPlantComment] = useState("");
  const [folder, setFolder] = useState(props.folder.folder);

  useEffect(() => {}, [plantImage]);

  const uploadPlant = () => {
    axios.post(`/api/plants/new/${folder}`, {
      plant,
      plantImage,
      plantComment,
    });
    setPlantImage("");
    setPlantImage("");
    setPlantComment("");
    props.history.goBack();
  };

  return (
    <div>
      <h1>Upload a New Plant</h1>
      <form>
        <label>
          Image Link:
          <input type="text" onChange={(e) => setPlantImage(e.target.value)} />
        </label>
        <label>
          Plant name:
          <input type="text" onChange={(e) => setPlant(e.target.value)} />
        </label>
        <label>
          Notes:
          <input
            type="text"
            onChange={(e) => setPlantComment(e.target.value)}
          />
        </label>
      </form>
      <button type="reset" onClick={() => uploadPlant()}>
        Upload
      </button>
      <img src={plantImage} alt="" />
    </div>
  );
};
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(withRouter(NewPlant));
