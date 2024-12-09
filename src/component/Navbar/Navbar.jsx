import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import caret from '../../assets/caret_icon.svg';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login'); 
  };


  const handleLogout = () => {
    // Clear the email from localStorage to log out the user
    localStorage.removeItem('email');
    console.log('Logout successful.');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Show</li>
            <li>Popular & New</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search} alt="Search" className="icons" />
          <p>Children</p>
          <img src={bell} alt="Notifications" className="icons" />
          <div className="navbar-profile">
            <img src={profile} alt="Profile" className="profile" />
            <img src={caret} alt="Dropdown" />
            <div className="dropdown">
              <p onClick={handleSignOut}>Sign out of Netflix</p>
            </div>
      <div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};
