// AnswerModal.jsx
import React from 'react';

const AnswerModal = ({ correctAnswer, selectedOption, onClose }) => {
  const isCorrect = correctAnswer === selectedOption;
  const modalStyle = {
    backgroundColor: isCorrect ? 'lightgreen' : 'lightcoral',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div className="modal">
      <div className="modal-content" style={modalStyle}>
        <h2>{isCorrect ? 'Correct!' : 'Incorrect'}</h2>
        <p>The correct answer is: {correctAnswer}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AnswerModal;
