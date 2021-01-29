import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getFolder } from "../../ducks/folderReducer";

const NewPlant = (props) => {
  const [plantImage, setPlantImage] = useState("");
  const [plant, setPlant] = useState("");
  const [plantComment, setPlantComment] = useState("");
  const [folder, setFolder] = useState(props.folder.folder);

  useEffect(() => {}, [plantImage]);

  const uploadPlant = () => {
    axios.post(`/api/plants/new/${folder}`, {
      plant,
      plantImage,
      plantComment,
    });
  };

  return (
    <div>
      <h1>Upload a New Plant</h1>
      <form>
        <label>
          Link:
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
      <button onClick={() => uploadPlant()}>Upload</button>
      <img src={plantImage} alt="" />
    </div>
  );
};
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(NewPlant);
