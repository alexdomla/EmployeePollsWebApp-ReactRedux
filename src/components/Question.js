import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Question component displays information about a single question
const Question = (props) => {
  return (
    <Link to={"questions/" + props.question.id}>
      <div className="question">
        <p>{props.id}</p>
        <div className="question__img">
          <img src={props.users[props.question.author].avatarURL} alt="" />
        </div>
        <div className="question__info">
          <h4>{props.users[props.question.author].name}</h4>
          <div className="question__date">
            <p>{new Date(props.question.timestamp).toDateString()}</p>
            <p className="question__separator">|</p>
            <p>
              {new Date(props.question.timestamp).getHours() +
                ":" +
                new Date(props.question.timestamp).getMinutes() +
                ":" +
                new Date(props.question.timestamp).getSeconds()}
            </p>
          </div>

          <button>Show</button>
        </div>
      </div>
    </Link>
  );
};

// mapStateToProps maps the state of the store to props of the component
const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    users,
    question,
  };
};

export default connect(mapStateToProps)(Question);
