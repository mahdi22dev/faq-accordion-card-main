import React, { useState } from "react";
import { AnswersAndQuastions } from "../Data";
import icon from "../images/icon-arrow-down.svg";

const ToggleAnswersComp = () => {
  const [questions, setQuestions] = useState(
    AnswersAndQuastions.map((item) => ({ ...item, showAnswer: false }))
  );

  const toggleAnswer = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, showAnswer: !question.showAnswer }
          : { ...question, showAnswer: false }
      )
    );
  };
  return (
    <ul className="faq-quations">
      {questions.map((question) => (
        <li key={question.id} className="dad">
          <div className="h2fucker">
            <h2
              id={question.showAnswer && "changeColor"}
              onClick={() => {
                toggleAnswer(question.id);
              }}
            >
              {question.Quastion}
            </h2>
            <img
              className={question.showAnswer ? "rotate" : "icon"}
              src={icon}
              alt=""
            />
          </div>
          {question.showAnswer && <p>{question.Answer}</p>}
          <div className="divider"></div>
        </li>
      ))}
    </ul>
  );
};

export default ToggleAnswersComp;
