import { memo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Overview from './Overview';
import Settings from './Settings';

const Dashboard: React.FC = memo(() => {
  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/dashboard">Overview</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <Routes>
          <Route index element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </section>
  );
});

Dashboard.displayName = 'Dashboard';

export default Dashboard;