import React from 'react';

function Timer({ timeRemaining }) {
  return (
    <div className="text-gray-700">
      Time: {timeRemaining}s
    </div>
  );
}

export default Timer;