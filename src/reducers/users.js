import {
  ADD_ANSWER_USER,
  ADD_QUESTION_USER,
  RECEIVE_USERS,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      // Update the state with the received users
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_USER:
      // Update the state with a new answer for a question for a specific user
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION_USER:
      // Update the state with a new question for a specific user
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid),
        },
      };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
}
