import React, { useState } from "react";
import logo from "../assets/hollywoodnails_logo.png";
import {Link} from 'react-router-dom';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Class for link hover white underline 
  const linkClass =
    "text-white hover:text-white hover:underline hover:decoration-white underline-offset-6";

  return (
    <nav className="bg-black shadow">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo mobile */}
          <div className="shrink-0 md:hidden">
            <img className="h-30 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center justify-center w-full space-x-10">
            {/* Left menu */}
            <div className="flex space-x-10">
              <Link to="/" className={linkClass}>Home</Link>
              <Link to="/services" className={linkClass}>Services</Link>
              <Link to="/gallery" className={linkClass}>Gallery</Link>
            </div>

            {/* Logo desktop */}
            <div className="shrink-0">
              <img className="h-30 w-auto" src={logo} alt="Logo" />
            </div>

            {/* Right menu */}
            <div className="flex space-x-10">
              <Link to="/specials" className={linkClass}>Specials</Link>
              <Link to="/policies" className={linkClass}>Policies</Link>
              <Link to="/help" className={linkClass}>Service Help</Link>
            </div>
          </div>

          {/* Hamburger mobile */}
          <div className="md:hidden h-8 w-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-white h-8 w-8"
            >
              {isOpen ? (
                <span className="text-4xl">&#x2715;</span> // X - close - size: 4xl
              ) : (
                <span className="text-4xl">&#9776;</span> // Hamburger - size: 4xl
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className={`block ${linkClass}`}>Home</Link>
          <Link to="/services" className={`block ${linkClass}`}>Services</Link>
          <Link to="/gallery" className={`block ${linkClass}`}>Gallery</Link>
          <Link to="/specials" className={`block ${linkClass}`}>Specials</Link>
          <Link to="/policies" className={`block ${linkClass}`}>Policies</Link>
          <Link to="/help" className={`block ${linkClass}`}>Service Help</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
