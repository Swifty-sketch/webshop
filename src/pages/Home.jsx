// src/pages/Home.jsx


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-screen max-h-screen text-white" style={{
      backgroundImage: `url(https://cdn.discordapp.com/attachments/600352759006625823/1245033357503500310/shoe.png?ex=6657472c&is=6655f5ac&hm=5ed8c4dff0d43e1bf864dba59bd298a36c8db1ae3e6611e034d0b1667b054781&)`,
    }}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Time to update your wardrobe?
          </h1>
          <p className="text-2xl mb-8 ">
            Or just to treat yourself.
          </p>
          <div className="flex justify-center mx-auto">
            <Link
              className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Browse
            </Link>
          </div>
        </div>
      </div>
    </div >


  );
};

export default Home;
