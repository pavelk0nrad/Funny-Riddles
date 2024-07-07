// App.jsx
import React from 'react';
import './App.css';
import RiddleList from './components/RiddleList';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header /> 
      <RiddleList />
      <Footer />
    </div>
  );
}

export default App;
