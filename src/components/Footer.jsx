import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import darkLogo from '../assets/Logo2.png';
import lightLogo from '../assets/Logo1.png';

const items = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    link: 'https://tiktok.com/'
  }
];

export default function Footer({ mode }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
      <div className="container px-10 py-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>MENU</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/Products'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Skor</Link>
              </li>
              <li>
                <Link to={'/Clothing'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Kläder</Link>
              </li>
              <li>
                <Link to={'/Products'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Alla produkter</Link>
              </li>
            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Information</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/contact'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Kontakta oss</Link>
              </li>
              <li>
                <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Om oss</Link>
              </li>
              <li>
                <Link to={'/returportal'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Returportal</Link>
              </li>
              <li>
                <Link to={'/termsofservice'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Terms of service</Link>
              </li>
              <li>
                <Link to={'/faq'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>FAQ</Link>
              </li>
              
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <p className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase" >Nyhetsbrev</p>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.</p>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder='Enter email address' className='w-full p-2 mr-4 rounded-md mb-4' />
              <button type="submit" className="w-full py-2 bg-gray-900 text-white font-bold rounded hover:bg-gray-800" >Subscribe</button>
            </form>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
              {
                items.map((x, index) => (
                  <a href={x.link} key={index} className='w-full py-2 hover:text-gray-900 cursor-pointer'>
                    <x.icon />
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '' }}>
        <div className="container px-5 py-3 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <Link to={'/'} className='flex'>
            <img src={mode === 'light' ? darkLogo : lightLogo} className="w-full" alt="Shoes & Stitches Logo" />
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2024 Shoes&Stitches —
            <a href="/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.shoes&stiches.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
