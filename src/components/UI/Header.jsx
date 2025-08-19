import React, { use } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row w-auto h-15 bg-zinc-800 p-10 items-center justify-around max-md:flex max-md:justify-around">
        <div className="flex items-center justify-end cursor-pointer">
          <Link to="/">
            <h1 className="text-4xl font-bold cursor-pointer text-white p-4">
              AtlasPedia
            </h1>
          </Link>
        </div>
        <nav className="max-md:hidden flex items-center justify-center">
          <ul className="flex flex-row gap-x-10 text-white">
            <Link to="/" onClick={() => setHamburger(false)}>
              <li className="transition transform hover:scale-105 hover:text-zinc-300">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="transition transform hover:scale-105 hover:text-zinc-300">
                About
              </li>
            </Link>
            <Link to="/country">
              <li className="transition transform hover:scale-105 hover:text-zinc-300">
                Country
              </li>
            </Link>
            <Link to="/contact">
              <li className="transition transform hover:scale-105 hover:text-zinc-300">
                Contact
              </li>
            </Link>
          </ul>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-end text-white cursor-pointer md:hidden text-3xl font-bold"
        >
          {isOpen ? <FiX /> : <FiAlignJustify />}
        </button>
      </div>

      {isOpen ? (
        <nav className="md:hidden bg-zinc-800 text-white w-full h-auto absolute top-15 left-0">
          <ul className="flex flex-col items-center justify-center gap-y-3 p-3">
            <li>
              <Link
                to="/"
                onClick={() => setHamburger(false)}
                className="text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setHamburger(false)}
                className="text-xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/country"
                onClick={() => setHamburger(false)}
                className="text-xl"
              >
                Country
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setHamburger(false)}
                className="text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}

export default Header;
