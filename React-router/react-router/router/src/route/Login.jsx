import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Custom validation for username
    if (!username) {
      usernameInput.setCustomValidity('Please fill username yaar');
      usernameInput.reportValidity();
      return; // Stop form submission if invalid
    } else {
      usernameInput.setCustomValidity(''); // Reset if valid
    }

    // Custom validation for password
    if (!password) {
      passwordInput.setCustomValidity('Please fill password yaaar');
      passwordInput.reportValidity();
      return; // Stop form submission if invalid
    } else {
      passwordInput.setCustomValidity(''); // Reset if valid
    }

    // Custom validation for Remember Me checkbox
    if (!rememberMe) {
      rememberMeCheckbox.setCustomValidity('Please check the checbox');
      rememberMeCheckbox.reportValidity();
  
    } else {
      rememberMeCheckbox.setCustomValidity(''); // Reset if valid
    }

    
    if (username && password && rememberMe) {
      alert("Form submitted successfully!");
     
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onInput={(e) => e.target.setCustomValidity('')} // 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onInput={(e) => e.target.setCustomValidity('')} // Reset on input
            />
          </div>
          <div className="checkbox-group">
            <input 
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              onInput={(e) => e.target.setCustomValidity('')} // Reset on input
            />
            <label className='remember'>Remember Me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
