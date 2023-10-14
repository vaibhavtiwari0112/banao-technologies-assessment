import React from 'react';
import { AiOutlinePlus, AiOutlineLogout } from 'react-icons/ai';
import './sideMenu.css';

const SideMenu = ({ open }) => {
  return (
    <div className={`side-menu${open ? ' open' : ''}`}>
      <div className="menu-items">
        <button className="menu-item write-blog">
          <AiOutlinePlus />
          Write a New Blog
        </button>
        <button className="menu-item leave-group">
          <AiOutlineLogout />
          Leave the Group
        </button>
      </div>
      <div className="people-list">
        <div className="person">
          <span>John Doe</span>
          <button className="unfollow-button">Unfollow</button>
        </div>
        <div className="person">
          <span>Jane Smith</span>
          <button className="unfollow-button">Unfollow</button>
        </div>
        
      </div>
    </div>
  );
};

export default SideMenu;