const AboutPage = () => {
  return (
    <div className="about-page bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r  from-purple-700 to-yellow-500 text-white py-16  py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About HiveBoard</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Effortless Task Management for Productivity Seekers
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mission py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-600">
          HiveBoard is a modern and intuitive Kanban board application designed
          to simplify task management, improve collaboration, and help
          individuals or teams stay organized.
        </p>
      </section>

      {/* Features Section */}
      <section className="features bg-gray-50 py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-700">
          <li className="bg-white shadow-md rounded-lg p-6">Drag-and-Drop Functionality</li>
          <li className="bg-white shadow-md rounded-lg p-6">Customizable Boards</li>
          <li className="bg-white shadow-md rounded-lg p-6">Collaboration Tools</li>
          <li className="bg-white shadow-md rounded-lg p-6">Progress Tracking</li>
          <li className="bg-white shadow-md rounded-lg p-6">Cross-Device Sync</li>
        </ul>
      </section>

      {/* Story Section */}
      <section className="story py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-600">
          HiveBoard was created to provide a simple yet powerful tool for task
          management. Whether you're a student, professional, or part of a team,
          HiveBoard adapts to your needs.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta bg-gradient-to-r from-purple-500 to-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Start Organizing Today</h2>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
          Sign Up
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
