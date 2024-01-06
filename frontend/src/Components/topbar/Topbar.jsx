// src/components/TopBar.jsx
import React, { useState } from 'react';
import './TopBar.css'; // Import the stylesheet
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Left side - Typing Master */}
        <a className="navbar-brand" href="#">
          Typing Master
        </a>

        {/* Right side - Links and Profile Icon */}
        <div className="navbar-nav ml-auto">
          <a className="nav-link" href="#">
            Leaderboard
          </a>
          <div className="nav-item profile-icon-container">
            <a
              className="nav-link profile-icon"
              href="#"
              onClick={toggleProfile}
            >
              <i className="fas fa-user-circle"></i>
            </a>
            {isProfileOpen && (
              <div className="profile-popup">
                {/* Profile Popup Content */}
                <div className="profile-popup-content">
                <Link to="/profile" className="profile-popup-item">
                    My Profile
                  </Link>
                  <a href="#" className="profile-popup-item">
                    Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="profile-popup-item">
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
