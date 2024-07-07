import { useState, useEffect } from 'react';

function Riddle() {
    const [riddles, setRiddles] = useState([]);
    const [riddle, setRiddle] = useState(null);
  
    useEffect(() => {
      // Funkce pro načtení dat z API
      const fetchRiddles = async () => {
        try {
          const response = await fetch('https://one7-01-riddles.onrender.com/riddles'); // Změňte URL na váš API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setRiddles(data.riddles); // Nastavení načtených dat do stavu
        } catch (error) {
          console.error('Error fetching riddles:', error);
        }
      };
  
      fetchRiddles();
    }, []);
  
    const loadRiddle = () => {
      if (riddles.length > 0) {
        const randomIndex = Math.floor(Math.random() * riddles.length);
        setRiddle(riddles[randomIndex]);
      }
    };
  
    return (
      <>
        <h1>Funny Riddles</h1>
        <div className="card">
          <button onClick={loadRiddle}>
            Get a Riddle
          </button>
          {riddle && (
            <div>
              <h2>{riddle.Title}</h2>
              <p>{riddle.Riddle}</p>
             
                <button>{riddle["Option 1"]}</button>
                <button>{riddle["Option 2"]}</button>
                <button>{riddle["Option 3"]}</button>
            
              <p><strong>Answer:</strong> {riddle.Answer}</p>
            </div>
          )}
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
)};
      export default Riddle;