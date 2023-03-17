import React, { useState } from "react";
import "../index.css";
import { connect } from "react-redux";
import Question from "./Question";
import Nav from "./Nav";

const Dashboard = ({ authedUser, questions, users }) => {
  const [showAnswered, setShowAnswered] = useState(false); // state variable to store whether to show answered or unanswered questions

  // helper function to filter questions based on whether they are answered or unanswered
  const filterQuestions = (question) => {
    if (showAnswered) {
      return isAnswered(question);
    } else {
      return isUnanswered(question);
    }
  };

  // helper function to check if the question is unanswered by the logged-in user
  const isUnanswered = (question) =>
    !question.optionOne.votes.includes(authedUser) &&
    !question.optionTwo.votes.includes(authedUser);

  // helper function to check if the question is answered by the logged-in user
  const isAnswered = (question) =>
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return (
    <div>
      <h1>Dashboard Page</h1>
      {/* add button to toggle between showing answered and unanswered questions */}
      <button onClick={() => setShowAnswered(!showAnswered)}>
        {showAnswered ? "Show Unanswered" : "Show Answered"}
      </button>
      <div className="container">
        <h2>{showAnswered ? "Answered" : "Unanswered"}</h2>
        <ul className="dashboard-list"></ul>
        <ul className="grid">
          {/* render filtered questions */}
          {questions.filter(filterQuestions).map((question) => (
            <li key={question.id}>
              <Question id={question.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
