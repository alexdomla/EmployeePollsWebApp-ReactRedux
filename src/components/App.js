import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Add from "./Add";
import QuestionDetails from "./QuestionDetails";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";

function App(props) {
  // call the handleInitialData action creator when App component mounts
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      {/* show the loading bar */}
      <LoadingBar />
      {
        // define the app routes using the Routes component from react-router-dom
        <Routes>
          {/* the dashboard is shown by default when a user is logged in */}
          <Route
            path="/"
            element={
              props.loading === false && props.isLoggedIn === true ? (
                <Dashboard />
              ) : (
                <Login />
              )
            }
          />
          {/* the login page */}
          <Route path="/login" exact element={<Login />} />
          {/* the leaderboard page */}
          <Route
            path="/leaderboard"
            exact
            element={props.isLoggedIn ? <Leaderboard /> : <Login />}
          />
          {/* the add poll page */}
          <Route
            path="/add"
            exact
            element={props.isLoggedIn ? <Add /> : <Login />}
          />
          {/* the poll details page */}
          <Route
            path="/questions/:id"
            element={props.isLoggedIn ? <QuestionDetails /> : <Login />}
          />
          {/* the 404 page */}
          <Route path="/404" exact element={<NotFound />} />
          {/* the catch-all 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
    </div>
  );
}

// map the authedUser from state to props
const mapStateToProps = ({ authedUser }) => ({
  // set loading to true when authedUser is null
  loading: authedUser === null,
  // set isLoggedIn to true when authedUser is not null
  isLoggedIn: !!authedUser,
});

// connect the component to the store
export default connect(mapStateToProps)(App);
