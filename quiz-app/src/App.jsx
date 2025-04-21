import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Options from './components/Options';
import Score from './components/Score';
import Timer from './components/Timer';
import Feedback from './components/Feedback';
import QuizSummary from './components/QuizSummary';
import questions from './data/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15); // Seconds
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  useEffect(() => {
    if (timeRemaining > 0 && !quizFinished) {
      const timerId = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timerId); // Cleanup function
    } else if (timeRemaining === 0) {
      handleAnswer(null); // Automatically submit without an answer
    }
  }, [timeRemaining, quizFinished]);

  const handleAnswer = (optionId) => {
    setSelectedOption(optionId);
    const isCorrect = currentQuestion.options.find((option) => option.id === optionId)?.isCorrect || false;

    if (isCorrect) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect.');
    }
    setTimeRemaining(0)

    setTimeout(() => {
      setFeedback(null);
      setSelectedOption(null);
      goToNextQuestion();
    }, 2000); // Show feedback for 2 seconds
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(30); // Reset timer
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeRemaining(30);
    setSelectedOption(null);
    setFeedback(null);
    setQuizFinished(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Interactive Quiz
        </h1>

        {!quizFinished ? (
          <>
            <div className="flex justify-between mb-4">
              <Score score={score} totalQuestions={totalQuestions} />
              <Timer timeRemaining={timeRemaining} />
            </div>

            <Question questionText={currentQuestion.text} />

            <Options
              options={currentQuestion.options}
              selectedOption={selectedOption}
              onSelect={handleAnswer}
            />

            {feedback && <Feedback message={feedback} />}

            {/* Debugging - Remove in Production */}
            {/*<p>Selected Option: {selectedOption}</p>*/}
            {/*<p>Feedback: {feedback}</p>*/}
          </>
        ) : (
          <QuizSummary
            score={score}
            totalQuestions={totalQuestions}
            restartQuiz={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;