import { connect } from "react-redux";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import NotFound from "./NotFound";

const QuestionDetails = ({ dispatch, authedUser, questions, users }) => {
  const { id } = useParams();
  const question = questions?.[id];
  // Check if the authenticated user has voted for the first option
  const hasVotedForOptionOne = question?.optionOne.votes.includes(authedUser);
  // Check if the authenticated user has voted for the second option
  const hasVotedForOptionTwo = question?.optionTwo.votes.includes(authedUser);
  // Check if the authenticated user has voted for any option
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  // Get the navigate function from React Router
  const navigate = useNavigate();

  // Handle when the user clicks on the first option
  const handleOptionOne = (e) => {
    e.preventDefault();
    console.log("running handleOptionOne" + question?.id);
    // Dispatch an action to add the answer for the first option
    dispatch(handleAddAnswer(question?.id, "optionOne"));
    // Navigate back to the home page
    navigate("/");
  };

  // Handle when the user clicks on the second option
  const handleOptionTwo = (e) => {
    e.preventDefault();
    // Dispatch an action to add the answer for the second option
    dispatch(handleAddAnswer(question?.id, "optionTwo"));
    // Navigate back to the home page
    navigate("/");
  };

  return questions?.[id] == null ? (
    <NotFound />
  ) : (
    <div className="pollPage">
      <h1>Poll Details {}</h1>
      <p>
        Poll by {users[question.author].name}
        <span>{}</span>
      </p>
      <div className="question__img">
        <img src={users[question.author].avatarURL} alt="" />
      </div>

      <p>Would you rather</p>
      <div className="unanswered">
        <div className="unanswered__item">
          <p>{question.optionOne.text}</p>
          {/* If the user has voted, show the number of people who voted for this option */}
          {hasVoted && (
            <p
              className={
                question.optionOne.votes.includes(authedUser)
                  ? "chosen"
                  : "notChosen"
              }
            >
              The number of people who voted for this option is{" "}
              {question.optionOne.votes.length}.
            </p>
          )}
          {/* If the user has voted, show the percentage of people who voted for this option */}
          {hasVoted && (
            <p>
              <span>
                {(
                  (question.optionOne.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100
                ).toFixed(2)}
              </span>
              % of people voted for this option.
            </p>
          )}
          {/* If the user hasn't voted, show the button to vote for this option */}
          {!hasVoted && (
            <button onClick={handleOptionOne} disabled={hasVoted}>
              Click
            </button>
          )}
        </div>
        <div className="unanswered__item">
          <p>{question.optionTwo.text}</p>
          {/* If the user has voted, show the number of people who voted for this option */}
          {hasVoted && (
            <p
              className={
                question.optionTwo.votes.includes(authedUser)
                  ? "chosen"
                  : "notChosen"
              }
            >
              The number of people who voted for this option is{" "}
              {question.optionTwo.votes.length}.
            </p>
          )}

          {hasVoted && (
            <p>
              <span>
                {(
                  (question.optionTwo.votes.length /
                    (question.optionOne.votes.length +
                      question.optionTwo.votes.length)) *
                  100
                ).toFixed(2)}
              </span>
              % of people voted for this option.
            </p>
          )}

          {!hasVoted && (
            <button onClick={handleOptionTwo} disabled={hasVoted}>
              Click
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions,
  };
  /*try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    return { authedUser, question, users };
  } catch (e) {
    return <Navigate to="/404" />;
  }*/
};

export default connect(mapStateToProps)(QuestionDetails);
