import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getFolder } from "../../ducks/folderReducer";

const NewPlant = (props) => {
  const [link, setLink] = useState("");
  const [folder, setFolder] = useState(props.folder.folder);

  useEffect(() => {}, [link]);

  const uploadPlant = () => {
    axios.post(`/api/plants/new/${folder}`);
  };

  return (
    <div>
      <h1>Upload a New Plant</h1>
      <form>
        <label>
          Link:
          <input type="text" onChange={(e) => setLink(e.target.value)} />
        </label>
      </form>
      <img src={link} alt="" />
    </div>
  );
};
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(NewPlant);
