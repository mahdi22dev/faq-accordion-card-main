export const ToggleAnswers = (id) => {
  setQuestions((prevQuestions) =>
    prevQuestions.map((question) =>
      question.id === id
        ? { ...question, showAnswer: !question.showAnswer }
        : question
    )
  );
};
