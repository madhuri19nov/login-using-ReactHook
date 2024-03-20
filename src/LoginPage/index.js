import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import JokeList from '../JokeList'; // Import the JokeList component
import './index.css'

const LoginPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
  };

  return (
    <div className='app-container'> 
      <h1>Welcome to Home </h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in as: {userData.username}</p>
          <JokeList /> {/* Render JokeList component after login */}
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
