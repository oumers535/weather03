import React from 'react';

function Question({ questionText }) {
  return (
    <div className="text-xl font-semibold mb-4">{questionText}</div>
  );
}

export default Question;