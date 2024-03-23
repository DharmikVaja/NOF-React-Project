import React, { useState } from "react";
import "./demoquiz.css";
import Questions from "./Questions";
import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, Navigate, useNavigate } from "react-router-dom";

function DemoQuiz() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const Navigate = useNavigate();
  const gotoreport = () => {
    Navigate("/after-report");
    localStorage.setItem("exam-score", score);
  };
  return (
    <div className="container-fluid Demo-Quiz">
      <ScrollToTop />
      <h1 className="quiz-h1 pb-4">GK Demo Quiz </h1>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {Questions.length} correct - (
            {Math.round((score / Questions.length) * 100)}%)
          </h2>
          <div className="d-flex justify-content-around">
            <button className="restart-btn" onClick={() => restartGame()}>
              Restart game
            </button>
            <button className="restart-btn" onClick={() => gotoreport()}>
              Go to Report
            </button>
          </div>
        </div>
      ) : (
        <div className="question-card ">
          <h2>
            Question: {currentQuestion + 1} out of {Questions.length}
          </h2>
          <h3 className="question-text">{Questions[currentQuestion].text}</h3>
          <ul className="answer-list">
            {Questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="answer-option"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Button
        className="sign-up leave-btn"
        to="/instructions"
        variant="primary"
        onClick={handleShow}
      >
        Leave Exam
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="h3">Are you Sure ?</div>
        </Modal.Header>
        <Modal.Body>
          Your performance will not be saved if you leave the exam.
        </Modal.Body>
        <div className="gap-3 d-flex justify-content-end me-5">
          <Button
            variant="secondary"
            className="common-btn px-3 py-3"
            onClick={handleClose}
          >
            Close
          </Button>
          <Link to="/user-dashboard">
            <Button variant="danger" className="common-btn px-3 py-3">
              Proceed
            </Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default DemoQuiz;
