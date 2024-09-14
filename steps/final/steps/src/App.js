import React, { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️", // 0
  "Apply for jobs 💼", // 1
  "Invest your new income 🤑", // 2
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Arhum" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      // setTest({ name: "Dream to be Unique" });

      //Bad Practice
      // test.name = "Ali";
    }
  }

  function onClose() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="close" onClick={onClose}>
        {" "}
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            {" "}
            Step: {step} {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
