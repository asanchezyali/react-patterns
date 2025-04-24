import { useNavigate } from 'react-router-dom';
import { memo, useCallback } from 'react';

const NotFound: React.FC = memo(() => {
  const navigate = useNavigate();
  
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <section className="not-found">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={goBack}>Go Back</button>
    </section>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;