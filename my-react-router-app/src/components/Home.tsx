import { Link, useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const Home: React.FC = memo(() => {
  const navigate = useNavigate();

  const goToAbout = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <section>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
      </ul>
      <button onClick={goToAbout}>Go to About</button>
    </section>
  );
});

// Add display name for better debugging
Home.displayName = 'Home';

export default Home;
