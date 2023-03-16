# Employee Polls Web App (React and Redux)

## Overview

This project is a part of the Udacity Senior Frontend Engineer - OLX Scholarship Nanodegree. The aim is creating a web app that lets an employee create polls for coworkers. The process goes like this: An employee is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is not possible. In the app, users will be able to answer polls, see which polls they haven’t answered, see how other people have voted, post polls, and see the ranking of users on the leaderboard..

## Why this project?

This project will solidify your understanding of React and Redux while giving you a chance to express your creativity in how you approach the problem or choose to add any additional functionality. You’ll practice improving the predictability of your application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components. You'll also be able to practice writing unit tests to ensure your code is working as expected.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine using Git:
   git clone https://github.com/example/customer-manager-app.git

2. Change into the project directory:
   cd customer-manager-app

3. Install the dependencies using either npm or yarn:
   npm install
   or
   yarn install

## Usage

To start the application, run the following command:
npm start

## Folder Structure

customer-relationship-management-app/
├── src/
│ ├── actions/
│ │ ├── authedUser.js
│ │ ├── questions.js
│ │ ├── shared.js
│ │ └── users.js
│ ├── components/
│ │ ├── Add.js
│ │ ├── App.js
│ │ ├── Dashboard.js
│ │ ├── Leaderboard.js
│ │ ├── Login.js
│ │ ├── Nav.js
│ │ ├── NotFound.js
│ │ ├── Question.js
│ │ └── QuestionDetails.js
│ ├── middleware/
│ │ ├── index.js
│ │ └── logger.js
│ ├── reducers/
│ │ ├── authedUser.js
│ │ ├── index.js
│ │ ├── questions.js
│ │ └── users.js
│ └── utils/
│ ├── \_DATA.js
│ └── api.js
├── index.css
├── index.js
├── store.js
├── package-lock.json
├── package.json
└── README.md

## Stack

This project uses the following technologies:

- React
- Redux
- Jest and React Testing Libraries

## Author

This application was developed by Alejandro Domínguez.
