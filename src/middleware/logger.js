// This middleware logs the action and the new state to the console.
const logger = (store) => (next) => (action) => {
  console.group(action.type); // start console group for the action type
  console.log("The action: ", action); // log the action
  const returnValue = next(action); // call the next middleware or the reducer to update the state
  console.log("The new state: ", store.getState()); // log the updated state
  console.groupEnd(); // end console group
  return returnValue; // return the value returned by next middleware or the reducer
};

export default logger;
