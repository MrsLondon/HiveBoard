const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>About HiveBoard</h1>
        <p>Effortless Task Management for Productivity Seekers</p>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          HiveBoard is a modern and intuitive Kanban board application designed
          to simplify task management, improve collaboration, and help
          individuals or teams stay organized.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Drag-and-Drop Functionality</li>
          <li>Customizable Boards</li>
          <li>Collaboration Tools</li>
          <li>Progress Tracking</li>
          <li>Cross-Device Sync</li>
        </ul>
      </section>

      {/* Story Section */}
      <section className="story">
        <h2>Our Story</h2>
        <p>
          HiveBoard was created to provide a simple yet powerful tool for task
          management. Whether you're a student, professional, or part of a team,
          HiveBoard adapts to your needs.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Organizing Today</h2>
        <button className="cta-button">Sign Up</button>
      </section>
    </div>
  );
};

export default AboutPage;
