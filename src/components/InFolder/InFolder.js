import React, { useState, useEffect } from "react";
import axios from "axios";
import SecondFoldersMap from "../SecondFoldersMap/SecondFoldersMap";
import PlantsMap from "../PlantsMap/PlantsMap";
import { getFolder } from "../../ducks/folderReducer";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const InFolder = (props) => {
  const [folders, setFolders] = useState([]);
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFolders();
  }, [folders.length]);

  useEffect(() => {
    getPlants(props.match.params.category_id);
  }, [plants.length]);

  const getFolders = () => {
    axios
      .get(
        `/api/folder/second/${props.match.params.category_id}/?search=${search}`
      )
      .then((res) => setFolders(res.data))
      .catch((err) => console.log(err));
  };

  const getPlants = () => {
    axios
      .get(`/api/plants/${props.match.params.category_id}`)
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="in-folder-container">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => getFolders()}>Search</button>
      <Link to="/SecondNewFolder">
        <button>New Folder</button>
      </Link>
      <Link to="/NewPlant">
        <button>New Plant</button>
      </Link>

      <div>
        {folders.map((e) => {
          return (
            <div key={e.category_id}>
              <SecondFoldersMap
                folder={e}
                category={e.category}
                category_id={e.category_id}
                category_image={e.category_image}
                setFolders={setFolders}
                getFolder={getFolder}
              />
            </div>
          );
        })}
      </div>

      <div>
        {plants.map((e) => {
          return (
            <div key={e.id}>
              <PlantsMap
                plants={e}
                plant_name={e.plant}
                plant_id={e.id}
                plant_image={e.plant_image}
                setPlants={setPlants}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(InFolder);
