import React, { useState } from "react";
useState;
const SingleQuastion = () => {
  const [questions, setQuestions] = useState(false);
  return (
    <li key={question.id} className="dad">
      <div className="h2fucker">
        <h2
          id={question.showAnswer && "changeColor"}
          onClick={() => {
            setQuestions(!questions);
          }}
        >
          {question.Quastion}
        </h2>
        <img className={questions ? "rotate" : "icon"} src={icon} alt="" />
      </div>
      {questions && <p>{question.Answer}</p>}
      <div className="divider"></div>
    </li>
  );
};

export default SingleQuastion;
