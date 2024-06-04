// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import shoeImage from '../assets/shoe.png'; // Make sure the path is correct

const Home = () => {
  return (
    <div className="w-screen max-h-screen text-white" style={{
      backgroundImage: `url(${shoeImage})`,
      backgroundSize: 'cover', // This ensures the background image covers the entire div
      backgroundPosition: 'center', // This centers the background image
    }}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Time to update your wardrobe?
          </h1>
          <p className="text-2xl mb-8">
            Or just to treat yourself.
          </p>
          <div className="flex justify-center mx-auto">
            <Link
              className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8"
            >
              shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
