import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import GameInformation from './components/GameInformation/GameInformation';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Developer from './components/Developer/Developer';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';

import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <GameInformation />
      <Leaderboard />
      <Developer />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;