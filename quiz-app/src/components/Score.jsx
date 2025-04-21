import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div className="text-gray-700">
      Score: {score} / {totalQuestions}
    </div>
  );
}

export default Score;