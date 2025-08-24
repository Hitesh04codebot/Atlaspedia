import React, { use } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-zinc-800">
      <div className="flex items-center justify-between h-16 px-10 max-sm:px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl text-white font-bold hover:scale-110 transform transition duration-300"
        >
          Atlaspedia
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>`text-white font-bold hover:scale-108 transform transition duration-300 ${ isActive  ? "underline underline-offset-7 decoration-red-500" : "" }`}>Home
          </NavLink>

          <NavLink
            to="/country"
            className={({ isActive }) =>`text-white font-bold hover:scale-108 transform transition duration-300 ${ isActive  ? "underline underline-offset-7 decoration-red-500" : "" }`}>Country
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>`text-white font-bold hover:scale-108 transform transition duration-300 ${ isActive  ? "underline underline-offset-7 decoration-red-500" : "" }`}>About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>`text-white font-bold hover:scale-108 transform transition duration-300 ${ isActive  ? "underline underline-offset-7 decoration-red-500" : "" }`}>Contact
          </NavLink>
        </div>

        {/* Hamburger Button (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FiX size={28} /> : <FiAlignJustify size={28} />}
        </button>
      </div>

      {/* Mobile Menu (toggle with state) */}
      {isOpen && (
        <div className="flex flex-col justify-center items-start px-10 max-sm:px-4 py-2 gap-6 md:hidden">
          <Link
            to="/"
            className="text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/country"
            className="text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            Country
          </Link>
          <Link
            to="/about"
            className="text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Header;
