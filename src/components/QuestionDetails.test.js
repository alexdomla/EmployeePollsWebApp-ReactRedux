describe("QuestionDetails", () => {
  it("will verify that the correct number of answers for each option is shown", () => {
    const question = {
      id: "8xf0y6ziyjabvozdd253nd",
      author: "sarahedo",
      timestamp: 1467166872634,
      optionOne: {
        votes: ["sarahedo"],
        text: "Build our new application with Javascript",
      },
      optionTwo: {
        votes: [],
        text: "Build our new application with Typescript",
      },
    };

    const votes1 = question.optionOne.votes.length;
    const votes2 = question.optionTwo.votes.length;

    expect(votes1).toEqual(1);
    expect(votes2).toEqual(0);
  });
});
