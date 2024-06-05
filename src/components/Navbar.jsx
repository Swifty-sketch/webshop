import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import Cart from "./Cart";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-10">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link to="/">
          <h1 className="text-xl">Shoes & Stitches</h1>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex gap-2">
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
                to="/contact"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Contact
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/products"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Shoes
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/products"
                className="text-xl uppercase hover:border-b-4 hover:border-red-300"
              >
                Clothing
              </Link>
            </li>
            <li className="mr-8">
              <button onClick={toggleCart} className="text-xl">
                <MdShoppingCart size={30} />
              </button>
            </li>
          </ul>
        </div>
        <div className="sm:hidden cursor-pointer pl-24">
          <ul className="flex items-center gap-2">
            <li>
              <MdShoppingCart size={25} onClick={toggleCart} />
            </li>
            <li className="mr-8">
              <FaBars onClick={handleNav} size={25} />
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
            : "fixed left-[-100%] top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-9 mt-10 ">
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
              to="/contact"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Shoes
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setNav(false)}
              className="text-xl uppercase hover:border-b-4 hover:border-red-300"
            >
              Clothing
            </Link>
          </li>
        </ul>
      </div>
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
}

export default Navbar;
