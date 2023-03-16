import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Nav = ({ dispatch, authedUser, users }) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleDispatchLogout = (e) => {
    e.preventDefault();
    console.log("You clicked");
    dispatch(handleLogout());
    navigate("/login");
  };

  return (
    <div className="header">
      {/* Navigation bar */}
      <nav className="nav">
        <ul className="nav__item">
          {/* Link to home */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Link to leaderboard */}
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          {/* Link to add new question */}
          <li>
            <Link to="/add">New</Link>
          </li>
        </ul>
      </nav>
      {/* Authentication bar */}
      <nav className="nav">
        {/* Display the user avatar and name */}
        <div className="authed">
          <div className="nav__img">
            <img src={users[authedUser].avatarURL} alt="" />
          </div>
          <h4>{users[authedUser].name}</h4>
        </div>
        {/* Logout button */}
        <button onClick={handleDispatchLogout} className="logout">
          Logout
        </button>
      </nav>
    </div>
  );
};

// Map state to props
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(Nav);
