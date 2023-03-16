// Importing functions from the `_DATA.js` file
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

// Importing action creator functions from the `users.js` file
import { addAnswerUser, addQuestionUser } from "./users";

// Defining action type constants
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";

// Action creator function that creates an action to receive questions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// Helper function that creates an action to add a question
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

// Thunk action creator function that dispatches multiple actions to handle adding a question
export function handleAddQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    // Call the `_saveQuestion` function from `_DATA.js` with the new question object
    return _saveQuestion({
      optionOneText: firstOption,
      optionTwoText: secondOption,
      author: authedUser,
    }).then((question) => {
      // Dispatch actions to add the new question to the store and to update the user's questions
      dispatch(addQuestion(question));
      dispatch(addQuestionUser(question));
    });
  };
}

// Helper function that creates an action to add an answer to a question
function addAnswerQuestion(author, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    author,
    qid,
    answer,
  };
}

// Thunk action creator function that dispatches multiple actions to handle adding an answer to a question
export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    // Call the `_saveQuestionAnswer` function from `_DATA.js` with the new answer object
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      // Dispatch actions to add the new answer to the store and to update the user's answers
      dispatch(addAnswerQuestion(authedUser, qid, answer));
      dispatch(addAnswerUser(authedUser, qid, answer));
    });
  };
}
