import React, { useEffect, useRef, useState } from 'react';
import { FaUsers, FaComment, FaEllipsisV, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Card.css'; // Import the Card-specific styles

const Card = ({ title, category, imageUrl, description, postedBy, shares, comments, date, location }) => {
  
    const [optionsVisible, setOptionsVisible] = useState(false);
    const optionsRef = useRef(null);
  
    const handleOptionsClick = () => {
      setOptionsVisible(!optionsVisible);
    };
  
    const handleOutsideClick = (e) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setOptionsVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

    return (
    <div className="post-card">
      <div className="top-bar">
        <div className="posted-info">
          <div className="avatar">
            <img src="avatar.jpg" alt="Avatar" />
          </div>
          <div className="posted-by">
            {postedBy}
          </div>
        </div>
        <div className="post-options">
          <span className="views">
            543 Views
            <span className="more-options" onClick={handleOptionsClick}>
              <FaEllipsisV className="dots-icon" />
              {optionsVisible && (
                <div ref={optionsRef} className="options-dropdown">
                  <ul>
                    <li>Edit</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                </div>
              )}
            </span>
            </span>
          <span className="share-icon">
            <FaUsers />
          </span>
        </div>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="post-image"
      />
      <div className="category">
        <span className="category-icon">{category}</span>
      </div>
      <div className="title">
        {title}
      </div>
      <div className="bottom-bar">
        <div className="date">
          <FaRegCalendarAlt className="date-icon" />
          {date}
        </div>
        <div className="location">
          <FaMapMarkerAlt className="location-icon" />
          {location}
        </div>
      </div>
      <div className="description">
        {description}
      </div>
      <div className="post-footer">
        <button className="detail-button">View Post</button>
      </div>
    </div>
  );
};

export default Card;
