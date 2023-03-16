import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// Setting the AUTHED_ID to null as the initial value.
const AUTHED_ID = null;

// Function to fetch initial data from the API and dispatch actions to the store.
export function handleInitialData() {
  return (dispatch) => {
    // Dispatch the action to show the loading bar.
    dispatch(showLoading());
    // Call the getInitialData() function to get the users and questions from the API.
    return getInitialData().then(({ users, questions }) => {
      // Dispatch the action to receive users with the users data received from the API.
      dispatch(receiveUsers(users));
      // Dispatch the action to receive questions with the questions data received from the API.
      dispatch(receiveQuestions(questions));
      // Dispatch the action to set the authenticated user to null.
      dispatch(setAuthedUser(AUTHED_ID));
      // Dispatch the action to hide the loading bar.
      dispatch(hideLoading());
    });
  };
}
