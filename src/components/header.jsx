import React, { useState, useEffect } from 'react';
import heroimg from '../images/icons/Navimg1.webp';
import heroimgScrolled from '../images/logo.png';
import { Link } from 'react-router-dom';
import Button from './button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-[100%] z-20 top-0 start-0 shadow-sm transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container">
        <div className="flex flex-wrap justify-between py-4">
          <Link to="https://preachtech.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className="w-44 h-9" src={scrolled ? heroimgScrolled : heroimg} alt="Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`w-5 h-5  group ${scrolled ? 'text-black' : 'text-white'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${isOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1 ml-auto`} id="navbar-sticky">
            <ul className={`flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 transition-colors duration-300 ${scrolled ? 'bg-white md:bg-transparent text-black' : 'bg-transparent text-white'} dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              <li>
                <Link to="/" className={`relative inline-block py-2 px-3 group ${scrolled ? 'text-black' : 'text-white'} `}>
                  Home
                  <span className={`rounded absolute bottom-0 left-0 w-full h-[2.5px] top-8 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/services" className={`relative inline-block py-2 px-3 group ${scrolled ? 'text-black' : 'text-white'} `}>
                  Services
                  <span className={`rounded absolute bottom-0 left-0 w-full h-[2.5px] top-8 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={`relative inline-block py-2 px-3 group  ${scrolled ? 'text-black' : 'text-white'} `}>
                  About
                  <span className={`rounded absolute bottom-0 left-0 w-full h-[2.5px] top-8 transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
                </Link>
              </li>
              <li>

                <Link to="/contact">
                  <Button
                    className='px-3 rounded-md'
                    buttontext='Contact Us'
                  /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
