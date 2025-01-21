import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/login.webp";

const Home = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-semibold mb-6 text-gray-100">Welcome to Dashboard</h1>
        <div className="space-x-4">
          <Link 
            to="/Login" 
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link 
            to="/SignUp" 
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
