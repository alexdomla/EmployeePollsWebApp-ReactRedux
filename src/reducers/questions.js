import {
  ADD_ANSWER_QUESTION,
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      // returns a new object containing the existing state and the received questions
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      // returns a new object containing the existing state and the new question
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER_QUESTION:
      // returns a new object containing the existing state and the updated question
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            // adds the author to the list of users who have voted for the answer
            votes: state[action.qid][action.answer].votes.concat(action.author),
          },
        },
      };
    default:
      return state;
  }
}
