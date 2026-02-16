import React from 'react';
import './ProfileToggleButton.css';

const ProfileToggleButton = ({ view, setView }) => {
  return (
    <div className="profile-toggle-container">
      <button
        className={`toggle-btn ${view === 'profile' ? 'active' : ''}`}
        onClick={() => setView('profile')}
      >
        Profile
      </button>
      <button
        className={`toggle-btn ${view === 'articles' ? 'active' : ''}`}
        onClick={() => setView('articles')}
      >
        Articles
      </button>
    </div>
  );
};

export default ProfileToggleButton;
