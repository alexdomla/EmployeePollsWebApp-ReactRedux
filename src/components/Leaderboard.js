import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

// This component displays the leaderboard with user scores.
const Leaderboard = ({ authedUser, users }) => {
  return (
    <div className="leaderboardPage">
      {/* If the user is authenticated, show the navigation bar */}
      {authedUser ? <Nav></Nav> : null}
      <h1>Leaderboard Page</h1>
      <table className="">
        <thead className="">
          <tr className="">
            <th className="">Avatar</th>
            <th className="">Name</th>
            <th className="">Answered</th>
            <th className="">Created</th>
          </tr>
        </thead>
        <tbody className="">
          {/* Iterate over the users array and display each user's information */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="table__img">
                  {/* Display the user's avatar */}
                  <img src={user.avatarURL} alt="" />
                </div>
              </td>
              <td className="">
                {/* Display the user's name */}
                <span className="">{user.name}</span>
              </td>
              <td className="">{Object.keys(user.answers).length}</td>
              {/* Display the number of questions the user has asked */}
              <td className="">{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// This function maps the state variables to the component props.
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  // Sort the users array in descending order of number of answers to questions.
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

// Connect the component to the Redux store.
export default connect(mapStateToProps)(Leaderboard);
