import { NotificationProvider } from "./contexts/NotificationContext"
import NotificationButton from "./components/NotificationButton"
import Notification from "./components/Notification"

function App() {
  return (
    <NotificationProvider>
      <div className="app">
        <nav className="navbar">
          <div className="nav-content">
            <div className="logo">📱 Nexcent</div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#community">Community</a>
              <a href="#blog">Blog</a>
              <a href="#pricing">Pricing</a>
            </div>
            <NotificationButton 
              message="✅ Registration form will be available soon!"
              className="register-btn"
            >
              Register Now
            </NotificationButton>
          </div>
        </nav>
        
        <main className="main-content">
          <section className="hero-section">
            <h1>Welcome to Nexcent</h1>
            <p>Your all-in-one business solution</p>
            <NotificationButton 
              message="🎉 Thanks for your interest! We'll notify you when registration opens."
            >
              Join Waitlist
            </NotificationButton>
          </section>
        </main>

        <Notification />
      </div>
    </NotificationProvider>
  )
}

export default App
