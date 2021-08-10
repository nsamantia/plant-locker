import React, { useState, useEffect } from "react";
import axios from "axios";
import FoldersMap from "../FoldersMap/FoldersMap";
import SecondPlantsMap from "../SecondPlantsMap/SecondPlantsMap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFolder } from "../../ducks/folderReducer";

const InSecondFolder = (props) => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPlants(props.match.params.category_id);
  }, [plants.length]);

  const getPlants = () => {
    axios
      .get(`/api/plants/second/${props.match.params.category_id}`)
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => getPlants()}>Search</button>
      <Link to="/SecondNewPlant">
        <button>New Plant</button>
      </Link>

      <div>
        {plants.map((e) => {
          return (
            <div key={e.id}>
              <SecondPlantsMap
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

export default connect(mapStateToProps, { getFolder })(InSecondFolder);
