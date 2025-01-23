import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
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
                className="btn btn-outline hover:text-hive-yellow hover:border-hive-yellow border border-yellow-500 py-3 px-6 rounded-md text-lg font-bold"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center flex-1 mb-10 lg:mb-0 z-10">
            <img
              className="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4 md:w-4/5  md:h-4/5  border-none"
              src="src/assets/task2.gif"
              alt="HiveBoard Illustration"
            />
          </div>
        </div>
        {/* Decorative Shape */}
        <div className="hidden lg:block overflow-hidden bg-hive-yellow rounded-l-full absolute h-80 w-2/4 top-24 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>
    </div>
  );
};

export default LandingPage;
