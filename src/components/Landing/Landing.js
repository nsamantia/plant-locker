import React, { useState, useEffect } from "react";
import axios from "axios";
import FoldersMap from "../FoldersMap/FoldersMap";
import { getFolder } from "../../ducks/folderReducer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Landing = (props) => {
  const [folders, setFolders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFolders();
    console.log(folders);
  }, [folders.length]);

  const getFolders = () => {
    axios
      .get(`/api/folder/?search=${search}`)
      .then((res) => setFolders(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => getFolders()}>Search</button>
      <Link to="/NewFolder">
        <button>New Folder</button>
      </Link>

      {folders.map((e) => {
        return (
          <div key={e.category_id}>
            <FoldersMap
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
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getFolder })(Landing);
