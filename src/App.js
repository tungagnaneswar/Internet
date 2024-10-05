import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      
      <div className="left-container">
        {/* Replace with the actual image */}
        <img className="illustration" src="https://app.kodnest.com/v2/login5.png" alt="Illustration" />
      </div>
      
      <div className="right-container">
      <h1>P&C Internet Service</h1>
        <div className="form-container">
          <h3 className="title">Welcome Back, Buddy</h3>
          <p className="subtitle">Speed is matter when accessing the internet!</p>
          
          <input className="input-field" type="email" placeholder="Email Address" />
          <input className="input-field" type="password" placeholder="Password" />
          
          <a className="forgot-password-link" href="#">Forgot your password?</a>
          
          <button className="login-button">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
