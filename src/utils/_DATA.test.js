const _DATA = require("./_DATA");

describe("_saveQuestion", () => {
  it("will verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function", async () => {
    const question = {
      author: "sarahedo",
      optionOneText: "Build our new application with Javascript",
      optionTwoText: "Build our new application with Typescript",
    };
    const formattedQuestion = await _DATA._saveQuestion(question);
    const check = {
      author: "sarahedo",
      optionOne: {
        votes: [],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    };
    expect(formattedQuestion).toEqual(expect.objectContaining(check));
    expect(typeof formattedQuestion.id === "string").toBe(true);
    expect(typeof formattedQuestion.author === "string").toBe(true);
    expect(typeof formattedQuestion.timestamp === "number").toBe(true);
    expect(typeof formattedQuestion.optionOne === "object").toBe(true);
    expect(typeof formattedQuestion.optionTwo === "object").toBe(true);
  });

  it("will verify that an error is returned if incorrect data is passed to the function", async () => {
    const passedQuestion = {
      optionOneText: 25,
      optionTwoText: null,
      author: ["sarahedo"],
    };

    const rejectText =
      "Please provide optionOneText, optionTwoText, and author";

    await expect(_DATA._saveQuestion(passedQuestion)).rejects.toEqual(
      rejectText
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will verify that true is returned when correctly formatted data is passed to the function", async () => {
    const passedAnswer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    await expect(_DATA._saveQuestionAnswer(passedAnswer)).resolves.toBe(true);
  });

  it("will verify that an error is returned if incorrect data is passed to the function", async () => {
    const passedAnswer = {
      authedUser: "ceo",
      qid: "",
      answer: "optionThree",
    };

    const rejectText = "Please provide authedUser, qid, and answer";
    await expect(_DATA._saveQuestionAnswer(passedAnswer)).rejects.toEqual(
      rejectText
    );
  });
});
