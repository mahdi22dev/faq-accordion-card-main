import React, { useState } from "react";
import ToggleAnswersComp from "./ToggleAnswersComp";
import Image1 from "../images/illustration-woman-online-desktop.svg";
import Image2 from "../images/bg-pattern-desktop.svg";
import box from "../images/illustration-box-desktop.svg";

const Me = () => {
  return (
    <>
      <div className="faq">
        <div className="image"></div>
        <div className="faq-toggle">
          <h1>FAQ</h1>
          <ToggleAnswersComp />
        </div>
      </div>
    </>
  );
};

export default Me;
