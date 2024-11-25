import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 m-0">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg overflow-hidden w-full h-screen">
        {/* Left Side: Background Image */}
        <div
          className="flex-1 bg-gray-50 relative"
          style={{
            backgroundImage: "url('src/images/welcome.jpg')", // Replace with actual path
            backgroundSize: "cover",
          }}
        ></div>

        {/* Right Side: Welcome Text */}
        <div className="flex-1 text-center flex flex-col justify-center p-10">
          <h1 className="text-yellow-500 text-lg font-bold">Welcome Everyone!</h1>
          <h2 className="text-blue-600 text-3xl font-bold mt-2">StudyNotes</h2>
          <p className="text-gray-600 mt-4">A SIMPLE DIGITAL STUDY NOTES!!!</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link to="/login">
              <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition">
                LOGIN
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
