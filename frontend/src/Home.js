import React, { useState } from 'react';
import img from "./Photos/pr7.jpg";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  const [roll, setRoll] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 


    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;

    if (roll && regex.test(roll)) {
      navigate('/calculate'); 
    } else {
      alert('Please enter a valid roll number (must contain both letters and numbers)');
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-y-auto">
      <Navbar/>

      <div className="relative w-full h-screen pt-20">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-full h-full bg-cover bg-center opacity-50"
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <div className="text-center bg-white bg-opacity-75 p-8 rounded-lg shadow-2xl max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">
              “Save Time Grading 
              with the easy 
              Grade Calculator.”
            </h1>
            <form className="flex items-center justify-center" onSubmit={handleSubmit}>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter your roll number"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4m8 4v1a2 2 0 11-4 0v-1m4 0H8m4-6h.01" />
                  </svg>
                </span>
              </div>
              <button type="submit" className="ml-4 px-6 py-1 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
