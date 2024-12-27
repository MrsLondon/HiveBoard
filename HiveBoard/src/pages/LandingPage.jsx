
import "./LandingPage.css"; // Import custom styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to HiveBoard</h1>
          <p>Your ultimate productivity tool to manage tasks effortlessly.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Task Management</h3>
            <p>Organize your tasks and stay on top of deadlines.</p>
          </div>
          <div className="feature-item">
            <h3>Collaborate</h3>
            <p>Work with your team in real-time.</p>
          </div>
          <div className="feature-item">
            <h3>Track Progress</h3>
            <p>Monitor your progress and achieve goals faster.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to boost your productivity?</h2>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default LandingPage;
