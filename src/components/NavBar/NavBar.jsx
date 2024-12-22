import React, { useContext } from 'react';
import { LearnContext } from '../../context/LearnContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './NavBar.css';

const NavBar = ({ setShowLogin }) => {
  const { isLoggedIn, logout, currentUser } = useContext(LearnContext); // Assuming you store the logged-in user's data in context
  const navigate = useNavigate();

  return (
    <div className='nav'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="menubar">
        <li>Home</li>
        <li>Courses</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>About us</li>
      </ul>
      <div className="profile">
        {!isLoggedIn ? (
          <>
            <button onClick={() => setShowLogin(true)} className="btn" id='btn1'>Login</button>
            <button className="btn" id="btn2">Sign up</button>
          </>
        ) : (
          <>
            <button className="btn" id='btn1'>
              {currentUser?.username || "Profile"} 
            </button>
            <button onClick={logout} className="btn" id="btn2">Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
