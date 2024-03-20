import React, { useState } from 'react';
import './index.css'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Perform authentication (example: checking username/password)
    // For simplicity, let's assume authentication is successful
    const userData = await fakeAuthService(username, password);
    onLogin(userData); // Pass user data to the parent component after successful login
  };

  return (
    <div className='form-container'>
      <h2>Login to continue</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div >
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Simulated authentication service (replace this with your actual authentication logic)
const fakeAuthService = async (username, password) => {
  // Dummy credentials for authentication
  const dummyCredentials = {
    username: 'madhuri',
    password: 'abcd1234',
  };

  // Check if the provided credentials match the dummy credentials
  if (username === dummyCredentials.username && password === dummyCredentials.password) {
    // If credentials match, return simulated user data
    const userData = {
      username: dummyCredentials.username,
      // You can fetch additional user data from the server here
      // For simplicity, let's just return the username
    };
    
    // Simulate network delay (replace this with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return userData;
  } else {
    // If credentials do not match, throw an error
    throw new Error('Invalid credentials');
  }
};
export default LoginForm;
