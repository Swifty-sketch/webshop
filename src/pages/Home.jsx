// src/pages/Home.jsx


import React from 'react';

const Home = () => {
  return (
    <div className="w-screen h-screen text-white" style={{
      background: "linear-gradient(36deg, rgba(21,21,22,1) 0%, rgba(72,72,98,1) 58%, rgba(134,147,149,1) 100%)"
    }}>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Time to update your wardrobe?
          </h1>
          <p className="text-2xl mb-8">
            Cheapest on the market. Pay with Crpto with ease.
          </p>
          <div className="flex justify-center mx-auto">
            <button
              className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
