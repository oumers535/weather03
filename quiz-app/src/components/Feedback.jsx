import React from 'react';

function Feedback({ message }) {
  return (
    <div className="text-green-600 font-semibold mt-4">{message}</div>
  );
}

export default Feedback;