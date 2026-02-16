
import './ProfileToggleButton.css';

const ProfileToggleButton = ({ view, setView }) => {
  return (
    <div className={`profile-toggle-container ${view === 'profile' ? 'show-profile' : 'show-articles'}`}>
      <div className="toggle-slider"></div>
      <button
        className={`toggle-btn ${view === 'profile' ? 'selected' : ''}`}
        onClick={() => setView('profile')}
      >
        Profile
      </button>
      <button
        className={`toggle-btn ${view === 'articles' ? 'selected' : ''}`}
        onClick={() => setView('articles')}
      >
        Articles
      </button>
    </div>
  );
};

export default ProfileToggleButton;
