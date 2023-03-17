import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Question component displays information about a single question
const Question = ({ question, id, users }) => {
  const { author, timestamp } = question;
  const { name, avatarURL } = users[author];

  return (
    <Link to={`questions/${question.id}`}>
      <div className="question">
        <p>{id}</p>
        <div className="question__img">
          <img src={avatarURL} alt="" />
        </div>
        <div className="question__info">
          <h4>{name}</h4>
          <div className="question__date">
            <p>{new Date(timestamp).toDateString()}</p>
            <p className="question__separator">|</p>
            <p>{new Date(timestamp).toLocaleTimeString()}</p>
          </div>

          <button>Show</button>
        </div>
      </div>
    </Link>
  );
};

// mapStateToProps maps the state of the store to props of the component
const mapStateToProps = ({ authedUser, users, questions }, { id }) => ({
  authedUser,
  users,
  question: questions[id],
});

export default connect(mapStateToProps)(Question);
