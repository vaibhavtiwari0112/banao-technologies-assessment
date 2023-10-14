import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Header from './component/header';
import Home from './component/Home'; // Import the Home component
import './App.css';
import Login from './component/login';
import SignupPopup from './component/SignupPopup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
          <Home /> 
       
      </div>
    </Router>
  );
}

export default App;
