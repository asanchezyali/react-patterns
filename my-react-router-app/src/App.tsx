import { Routes, Route, Link, useLocation } from "react-router-dom"
import { memo } from "react"
import Product from "./components/Product"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import Profile from "./components/Profile"
import NotFound from "./components/NotFound"

const About = memo(() => <h2>About</h2>)

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
            <li><Link to="/dashboard" className={location.pathname.startsWith("/dashboard") ? "active" : ""}>Dashboard</Link></li>
            <li><Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Profile</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={false}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App