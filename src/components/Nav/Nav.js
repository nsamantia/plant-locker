import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";
import { getFolder } from "../../ducks/folderReducer";

const Nav = (props) => {
  useEffect(() => {
    // Keeps users on session when page is refreshed
    axios.get(`/api/auth/getUser`).then((res) => {
      props.loginUser(res.data);
      // Keeps folder id from clearing when page is refreshed
    });
  }, []);

  return (
    <div>
      <div>
        <Link to="/Landing">
          <p>Plant Locker</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { loginUser, getFolder })(Nav);
