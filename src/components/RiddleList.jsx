import React, { useState, useEffect } from 'react';
import GetRiddleButton from './GetRiddleButton';
import RiddleDisplay from './RiddleDisplay';

const RiddleList = () => {
  const [riddles, setRiddles] = useState([]);
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        const response = await fetch('https://one7-01-riddles.onrender.com/riddles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRiddles(data.riddles);
        setLoadError(false); // Reset load error state on successful fetch
      } catch (error) {
        console.error('Error fetching riddles:', error);
        setLoadError(true); // Set load error state on fetch error
        // Retry fetching after a delay (e.g., 5 seconds)
        setTimeout(fetchRiddles, 5000);
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
    loadRiddle(); // Load new riddle on modal close
  };

  return (
    <div>
   
      {!currentRiddle && !loadError && <GetRiddleButton onClick={loadRiddle} />}
      {currentRiddle && (
        <RiddleDisplay
          riddle={currentRiddle}
          selectedOption={selectedOption}
          onAnswer={handleAnswer}
          onCloseModal={handleCloseModal}
        />
      )}
      {loadError && <p>Failed to load riddles. Retrying...</p>}
    </div>
  );
};

export default RiddleList;
