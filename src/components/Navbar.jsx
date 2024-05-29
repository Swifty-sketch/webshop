import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
  // State to manage the visibility of the mobile navigation menu
  const [nav, setNav] = useState(false);

  // Function to toggle the mobile navigation menu visibility
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-10"> {/* Fixed navbar with a higher z-index */}
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link to="/">
          {/* Logo here */}
          <h1 className="text-xl">Shoes & Stiches</h1>
        </Link>
        {/* Desktop menu - hidden on small screens (sm:hidden) */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex gap-2">
            <li className="mr-8">
              <Link
                to="/"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Home
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/about"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                About
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/products"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Products
              </Link>
            </li>
            <li className="mr-8">
              <Link>
                <MdShoppingCart size={30}/>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile menu icon - visible only on small screens (sm:hidden) */}
        <div className="sm:hidden cursor-pointer pl-24">
          <ul className="flex items-center gap-2">
            <li><MdShoppingCart size={25}/></li>
            <li className="mr-8"><FaBars onClick={handleNav} size={25} /></li>
          </ul>
        </div>
      </div>
      {/* Mobile navigation menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
            : "fixed left-[-100%] top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
        }
      >
        {/* Close icon for the mobile menu */}
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        {/* Mobile menu links */}
        <ul className="flex flex-col gap-9 mt-10 ">
          <li>
            <Link
              to="/"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
