import React from 'react';

function Options({ options, selectedOption, onSelect }) {
  return (
    <ul>
      {options.map((option) => (
        <li
          key={option.id}
          className={`py-2 px-4 rounded-md cursor-pointer ${
            selectedOption === option.id
              ? 'bg-blue-200'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => onSelect(option.id)}
        >
          {option.text}
        </li>
      ))}
    </ul>
  );
}

export default Options;