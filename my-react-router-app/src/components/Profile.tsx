import { memo } from 'react';

const Profile: React.FC = memo(() => {
  return (
    <section className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <img 
          src="https://via.placeholder.com/120" 
          alt="Profile" 
          className="profile-avatar" 
        />
        <div className="profile-details">
          <h3>John Doe</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
    </section>
  );
});

Profile.displayName = 'Profile';

export default Profile;