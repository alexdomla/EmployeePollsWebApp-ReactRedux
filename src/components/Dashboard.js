import React from "react";
import "../index.css";
import { connect } from "react-redux";
import Question from "./Question";
import Nav from "./Nav";

const Dashboard = ({ authedUser, questions, users }) => {
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
      {/* render navigation component if user is logged in */}
      {authedUser ? <Nav></Nav> : null}
      <h1>Dashboard Page</h1>
      <div className="container">
        <h2>Unanswered</h2>
        <ul className="dashboard-list"></ul>
        <ul className="grid">
          {/* render unanswered questions */}
          {questions.filter(isUnanswered).map((question) => (
            <li key={question.id}>
              <Question id={question.id} />
            </li>
          ))}
        </ul>
      </div>

      <div className="container marginTop">
        <h2>Answered</h2>
        <ul className="grid">
          {/* render answered questions */}
          {questions.filter(isAnswered).map((question) => (
            <li key={question.id}>
              <Question id={question.id} authedUser={authedUser} />
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
