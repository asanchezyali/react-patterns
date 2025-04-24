import { memo, useCallback } from 'react';

const Settings: React.FC = memo(() => {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  }, []);

  return (
    <div className="settings">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notifications">
            <input 
              type="checkbox" 
              id="notifications" 
              name="notifications"
            />
            <span>Enable notifications</span>
          </label>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
});

Settings.displayName = 'Settings';

export default Settings;