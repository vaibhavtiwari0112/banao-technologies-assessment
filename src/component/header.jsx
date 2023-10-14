import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';
import SideMenu from './Sidemenu';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoginPopup from './LoginPopup';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the SideMenu component

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (isLoggedIn) {
      setMenuOpen(!menuOpen);
    }
  
  };
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginShow = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };
  return (
    <div className="header-container">
      <header className={`header${menuOpen ? ' menu-open' : ''}`}>
        <div className="logo">My Blog</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div className={`avatar-container${menuOpen ? ' open' : ''}`} onClick={handleMenuClick}>
          {isLoggedIn ? (
            <div className="avatar-icon">
              <FaUserCircle size={40} />
            </div>
          ) : (
            <div className="login-message">Please log in its free
<button type="button" className="btn btn-link btn-floating mx-1" onClick={() => { handleLoginShow(); onLogin(); }}>
                            <i className="fab fa-twitter">Login</i>
                          </button>
                         
            </div>
          )}
        </div>
      </header>
      <div className={`background-overlay ${showLogin ? 'show' : ''}`} />
      <LoginPopup show={showLogin} handleClose={handleLoginClose} />
      {isLoggedIn && <SideMenu open={menuOpen} />} {/* Display side menu if user is logged in */}
    </div>
  );
};

export default Header;
