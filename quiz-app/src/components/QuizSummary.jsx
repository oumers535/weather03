import React from 'react';

function QuizSummary({ score, totalQuestions, restartQuiz }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-gray-700 mb-4">
        You scored {score} out of {totalQuestions}.
      </p>
      <button
        onClick={restartQuiz}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizSummary;