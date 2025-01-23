import React from "react";
import { Link } from "react-router-dom";

const HiveBoardLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 font-Poppins">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 px-6">
          {/* Text Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-hive-yellow text-4xl md:text-5xl lg:text-6xl text-center lg:text-left mb-6 font-bold">
              Welcome to HiveBoard
            </h2>
            <p className="text-hive-gray text-lg text-center lg:text-left mb-6">
              A dynamic space to organize your tasks, collaborate seamlessly,
              and achieve your goals. Your ideas deserve the Hive treatment.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              {/* Get Started Button */}
              <Link
                to="/home"
                className="btn btn-yellow hover:bg-hive-darkyellow border border-yellow-500 py-3 px-6 rounded-md text-lg font-bold"
              >
                Get Started
              </Link>
              {/* Learn More Button */}
              <Link
                to="/about"
                className="btn btn-outline hover:text-hive-yellow hover:border-hive-yellow border border-gray-400 py-3 px-6 rounded-md text-lg font-bold"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center flex-1 mb-10 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2Y4NW42N2IyZDl0dnZybnJ5aGVyMGw4ODdvMGIwcnI5ZnVmYmZhbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3a53VvGpzUgh05qq7W/giphy.gif"
              alt="HiveBoard Illustration"
            />
          </div>
        </div>
        {/* Decorative Shape */}
        <div className="hidden lg:block overflow-hidden bg-hive-yellow rounded-l-full absolute h-80 w-2/4 top-24 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 mt-20 lg:mt-40">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-hive-yellow">Features</h1>
            <p className="text-hive-gray mt-4">
              HiveBoard provides tools to streamline your workflow and keep
              everything in sync.
            </p>
          </div>
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-20">
            <img
              className="w-full lg:w-1/2"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFidndkYTl1MmticTJ3d3d1ZWNvdGVpamt3N3RxN213dTV6NGRtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8VkgrPdxMh0oo/giphy.gif"
              alt="Feature 1"
            />
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-hive-yellow">
                Organize Your Tasks
              </h2>
              <p className="text-hive-gray mt-4">
                Create, categorize, and prioritize tasks with ease. HiveBoard
                adapts to your workflow.
              </p>
              <Link
                to="/about"
                className="mt-6 btn btn-yellow hover:bg-hive-darkyellow border border-yellow-500 py-3 px-6 rounded-md text-lg font-bold"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mt-20">
            <img
              className="w-full lg:w-1/2"
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWlmdTV4c3BjOHQ4MmZjaG9tYWJuNHBwcXJkeHRnOTVsNjRmYnlybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Bz3J61Fswq1zdruPBI/giphy.gif"
              alt="Feature 2"
            />
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-hive-yellow">
                Collaborate in Real-Time
              </h2>
              <p className="text-hive-gray mt-4">
                Work with your team like never before. Share updates, assign
                tasks, and see progress live.
              </p>
              <Link
                to="/about"
                className="mt-6 btn btn-yellow hover:bg-hive-darkyellow border border-yellow-500 py-3 px-6 rounded-md text-lg font-bold"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiveBoardLandingPage;
