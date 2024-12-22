import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LearnContext } from '../../context/LearnContext';
import loginimg from '../../assets/Rectangle 77.png';
import './Login.css';

const Login = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { login } = useContext(LearnContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); 

  const handleLogin = () => {
    if (username && password) {
      login();
      navigate('/main');
      setShowLogin(false); 
    } else {
      alert('Please enter your username and password');
    }
  };

  const handleRegister = () => {
    if (username && password) {
      alert('Registered successfully');
      navigate('/main');
      setShowLogin(false); 
    } else {
      alert('Please enter your username and password');
    }
  };

  return (
    <div className='loginCont'>
      <div className="loginGrid">
        <div className="LoginImage">
          <img src={loginimg} alt="Login" />
        </div>
        <div className="LoginDetail">
          <h3>Welcome to TOTC</h3>
          <div className="btnContainer">
            <button onClick={() => setIsLogin(true)}>Login</button>
            <button onClick={() => setIsLogin(false)}>Register</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            placeholder='Enter Your Username' 
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            placeholder='Enter Your Password' 
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {isLogin ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <button onClick={handleRegister}>Register</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
