import { memo } from 'react';

const Overview: React.FC = memo(() => {
  const stats = [
    { title: 'Total Views', value: '2,847' },
    { title: 'Products', value: '24' },
    { title: 'Active Users', value: '156' },
    { title: 'Conversion Rate', value: '2.4%' }
  ];

  return (
    <div className="dashboard-grid">
      {stats.map((stat, index) => (
        <div key={index} className="dashboard-card">
          <h3>{stat.title}</h3>
          <p className="stat-value">{stat.value}</p>
        </div>
      ))}
    </div>
  );
});

Overview.displayName = 'Overview';

export default Overview;