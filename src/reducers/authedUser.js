import {
  SET_AUTHED_USER,
  LOGOUT_AUTHED_USER,
  LOGIN_ERROR,
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      // Update the authenticated user id in the store
      return action.id;
    case LOGOUT_AUTHED_USER:
      // Remove the authenticated user id from the store
      return null;
    case LOGIN_ERROR:
      // Update the store with an error message if the login fails
      return {
        ...state,
        loginError: action.error,
      };
    default:
      // Return the current state by default
      return state;
  }
}
