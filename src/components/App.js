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
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import Nav from "./Nav";

const ProtectedRoute = ({ children }) => {
  const { authedUser } = useSelector((state) => state);
  const location = useLocation();
  return authedUser ? (
    <>
      <Nav />
      <Outlet />
    </>
  ) : (
    <Login redirectTo={location.pathname} />
  );
};

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
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/questions/:id" element={<QuestionDetails />} />
            <Route path="/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
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
