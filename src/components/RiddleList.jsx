import React, { useState, useEffect } from 'react';
import GetRiddleButton from './GetRiddleButton';
import RiddleDisplay from './RiddleDisplay';
import Header from './Header'; 

const RiddleList = () => {
  const [riddles, setRiddles] = useState([]);
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        const response = await fetch('https://one7-01-riddles.onrender.com/riddles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRiddles(data.riddles);
      } catch (error) {
        console.error('Error fetching riddles:', error);
      }
    };

    fetchRiddles();
  }, []);

  const loadRiddle = () => {
    if (riddles.length > 0) {
      const randomIndex = Math.floor(Math.random() * riddles.length);
      setCurrentRiddle(riddles[randomIndex]);
      setSelectedOption(null); // Reset selected option when a new riddle is loaded
    }
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleCloseModal = () => {
    setSelectedOption(null);
    loadRiddle(); // Načtení nového riddle při zavření modálního okna
  };

  return (
    <div>
     
      {!currentRiddle && <GetRiddleButton onClick={loadRiddle} />}
      {currentRiddle && (
        <RiddleDisplay
          riddle={currentRiddle}
          selectedOption={selectedOption}
          onAnswer={handleAnswer}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default RiddleList;
