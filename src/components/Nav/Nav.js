import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";
import { getFolder } from "../../ducks/folderReducer";
import "../../css/Nav.css";

const Nav = (props) => {
  useEffect(() => {
    // Keeps users on session when page is refreshed
    axios.get(`/api/auth/getUser`).then((res) => {
      props.loginUser(res.data);
    });
  }, []);

  useEffect(() => {
    getFolder();
  }, [props.getFolder.length]);

  return (
    <div class="nav-container">
      <div>
        <Link class="link" to="/Landing">
          <p>Plant Locker</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { loginUser, getFolder })(Nav);
