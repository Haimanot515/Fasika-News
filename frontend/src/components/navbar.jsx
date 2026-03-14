import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">MyApp</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-200">Home</a>
        <a href="/about" className="hover:text-gray-200">About</a>
        <a href="/services" className="hover:text-gray-200">Services</a>
        <a href="/contact" className="hover:text-gray-200">Contact</a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center space-y-3 py-4 md:hidden">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/services" className="hover:text-gray-200">Services</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;