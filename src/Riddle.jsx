import { useState, useEffect } from 'react';
import './App.css';




  return (
    <>
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
      
    </>
  );


export default Riddle;
