// RiddleDisplay.jsx
import React from 'react';
import AnswerModal from './AnswerModal';

const RiddleDisplay = ({ riddle, selectedOption, onAnswer, onCloseModal }) => {
  const handleOptionClick = (option) => {
    onAnswer(option);
  };

  return (
    <div className="card">
      <h2>{riddle.Title}</h2>
      <p className='riddle-text'>{riddle.Riddle}</p>
      <div className="option">
        <button className="button-option" onClick={() => handleOptionClick(riddle["Option 1"])}>a: {riddle["Option 1"]}</button>
        <button className="button-option" onClick={() => handleOptionClick(riddle["Option 2"])}>b: {riddle["Option 2"]}</button>
        <button className="button-option" onClick={() => handleOptionClick(riddle["Option 3"])}>c: {riddle["Option 3"]}</button>
      </div>
      {selectedOption && (
        <AnswerModal
          correctAnswer={riddle.Answer}
          selectedOption={selectedOption}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
};

export default RiddleDisplay;
