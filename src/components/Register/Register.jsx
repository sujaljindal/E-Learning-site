import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerimg from '../../assets/register.png';
import '../Login/Login.css';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    let regobj = { user, password, name, email, phone };

    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(regobj),
      });

      if (!response.ok) {
        throw new Error('Registration failed. Please try again later.');
      }

      // After successful registration, navigate to login
      navigate('/login');
    } catch (error) {
      // Show the error message from the catch block
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="loginCont">
      <div className="loginGrid">
        <div className="LoginImage">
          <img src={registerimg} alt="Register" />
        </div>
        <div className="LoginDetail">
          <h3>Welcome to TOTC</h3>
          <div className="btnContainer">
            <button onClick={() => navigate('/login')}>Login</button>
            <button>Register</button>
          </div>
          <p>Please fill in your details to register and join our community!</p>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message */}
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
