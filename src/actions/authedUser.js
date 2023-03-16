// Action type constants
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";

// Action creator function that creates an action to set the authenticated user's ID
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

// Action creator function that creates an action to log the authenticated user out
export function logoutAuthedUser() {
  return {
    type: LOGOUT_AUTHED_USER,
  };
}

// Thunk action creator function that dispatches multiple actions to handle the login process
export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();

    // Check if the user is valid
    if (!isValidUser(users, username, password)) {
      // If the user is invalid, dispatch actions to show an error message and log the user out
      dispatch(showLoginError("Invalid username or password."));
      dispatch(logoutAuthedUser());
      return;
    }

    // If the user is valid, dispatch an action to set the authenticated user's ID
    dispatch(setAuthedUser(username));
  };
}

// Helper function that checks if a user with the given username and password exists in the `users` object
function isValidUser(users, username, password) {
  const user = Object.values(users).find(
    (user) => user.id === username && user.password === password
  );
  return user ? user : false;
}

// Thunk action creator function that dispatches an action to log the authenticated user out
export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutAuthedUser());
  };
}

// Action creator function that creates an action to show an error message during login
export function showLoginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
