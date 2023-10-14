import React, { useState } from 'react';
import './Home.css';
import Card from './Card'; // Import the Card component
import { FaUsers, FaEllipsisV, FaComment } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPen, FaCheck } from 'react-icons/fa';

const Home = () => {
  const posts = [
    {
        id: 3,
        title: 'Example Post 3',
        category: 'Education',
        imageUrl: 'https://via.placeholder.com/300x200',
        description: 'This is an example post description 1.',
        postedBy: 'John Doe',
        shares: 123,
        comments: 45,
        date: 'August 15, 2023',
        location: 'New York, NY',
    },
    {
        id: 3,
        title: 'Example Post 3',
        category: 'Education',
        imageUrl: 'https://via.placeholder.com/300x200',
        description: 'This is an example post description 1.',
        postedBy: 'John Doe',
        shares: 123,
        comments: 45,
        date: 'August 15, 2023',
        location: 'New York, NY',
    },
    {
        id: 3,
        title: 'Example Post 3',
        category: 'Education',
        imageUrl: 'https://via.placeholder.com/300x200',
        description: 'This is an example post description 1.',
        postedBy: 'John Doe',
        shares: 123,
        comments: 45,
        date: 'August 15, 2023',
        location: 'New York, NY',
      },
    // Add more posts...
  ];// Import the FaUsers icon from react-icons
  const [recommendedPeople, setRecommendedPeople] = useState([
    { id: 1, name: 'Jane Doe', avatar: 'avatar1.jpg' },
    { id: 2, name: 'John Smith', avatar: 'avatar2.jpg' },
    // Add more recommended people...
  ]);

  const totalPosts = 150; // Replace with the actual total number of posts

  const handleOptionSelect = (option) => {
    // Handle the selected option here
    console.log(`Selected option: ${option}`);
  };
  const [location, setLocation] = useState('Noida, India'); // Initial location
  const [editingLocation, setEditingLocation] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  

  const toggleEditing = () => {
    setEditingLocation(!editingLocation);
  };

  return (
    <div className="home-container">
      <img
        src="https://via.placeholder.com/800x400"
        alt="Home"
        className="home-image"
      />
      <div className="option-header">
        <div className="options">
          <div className="option1">All Posts ({totalPosts})</div>
          <div className="option1">Jobs</div>
          <div className="option1">Education</div>
          <div className="option1">Articles</div>
        </div>
        <div className="buttons">
          <div className="dropdown">
            <button className="write-post-button">Write a Post</button>
            <div className="dropdown-content">
              <div onClick={() => handleOptionSelect('Text')}>Text Post</div>
              <div onClick={() => handleOptionSelect('Image')}>Image Post</div>
              <div onClick={() => handleOptionSelect('Video')}>Video Post</div>
            </div>
          </div>
          <button className="join-group-button">
            <FaUsers /> Join a Group
          </button>
        </div>
      </div>
      <div className="content-container">
        <div className="cards-container">
          {posts.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="search-container">
    <div className="location-icon">
      <FaMapMarkerAlt />
    </div>
    <div className="edit-location">
  <div className="location-line">
    {editingLocation ? (
      <>
        <input
          type="text"
          className="location-input"
          value={location}
          onChange={handleLocationChange}
        />
        <FaCheck onClick={toggleEditing} />
      </>
    ) : (
      <>
        <span className="current-location">{location}</span>
        <FaPen className="edit-icon" onClick={toggleEditing} />
      </>
    )}
  </div>
  

  <div className="search-text">
    
    <br></br>
    Click on pen then on text to change current loction.
    <br></br>
  <br></br>
    Your location will help us serve better and extend a personalized experience.
  </div>
  {editingLocation && (
               <div className="recommended-people">
               <h3 className="recommended-heading">Recommended People</h3>
               {recommendedPeople.map((person) => (
                 <div className="recommended-person" key={person.id}>
                   <img src={person.avatar} alt={person.name} className="avatar" />
                   <div className="person-info">
                     <p className="person-name">{person.name}</p>
                     <button className="follow-button">Follow</button>
                   </div>
                 </div>
               ))}
             </div>
           )}
</div>

</div>

    </div>
    <div className="footer">
          <p>&copy; 2023 Vaibhav's made Website for ATGWorld Task. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Home;






