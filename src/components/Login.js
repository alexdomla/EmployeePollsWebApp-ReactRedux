// Import necessary dependencies
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

// Define the Login component
const Login = ({ dispatch, isLoggedIn }) => {
  // Define the navigate function from react-router-dom
  const navigate = useNavigate();

  // Initialize state variables using the useState hook
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle changes to the username input field
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  // Handle changes to the password input field
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      // If username or password is not entered, show error message
      setSuccess(false);
      setError(true);
      return;
    }

    // Dispatch action to log in user with entered credentials
    dispatch(handleLogin(username, password));
    navigate("/");

    // Reset username and password state variables and remove error message
    setUsername("");
    setPassword("");
    setError(false);
  };

  // Render the Login component
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <div className="login__img">
        <img src="./images/avatars.png" alt="" />
      </div>
      {error && (
        <p data-testid="error-header">
          Please enter a correct username and a password.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">User</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={handleUsername}
          value={username}
          data-testid="name-input"
        ></input>
        <label htmlFor="">Password</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={handlePassword}
          value={password}
          data-testid="password-input"
        ></input>
        <button type="submit" data-testid="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

// Map the authedUser state to props and export the component
const mapStateToProps = ({ authedUser }) => ({
  isLoggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
