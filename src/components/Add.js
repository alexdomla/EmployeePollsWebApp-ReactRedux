import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

// Add component, which allows users to add a new question
const Add = ({ dispatch, authedUser, isLoggedIn }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  // Handle changes in the first option input
  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  // Handle changes in the second option input
  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstOption && secondOption) {
      dispatch(handleAddQuestion(firstOption, secondOption));
      navigate("/");
    } else {
      alert("Please fill both options before submitting");
    }
  };

  // Render the form for adding a new question
  return (
    <div className="newPage">
      {authedUser ? <Nav></Nav> : null}
      <h1>Create Poll</h1>
      <p>Would you rather</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Option</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstOption}
          onChange={handleFirstOptionChange}
        ></input>
        <label htmlFor="">Second Option</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={secondOption}
          onChange={handleSecondOptionChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Map the authedUser state to props
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
  isLoggedIn: !!authedUser,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(Add);
