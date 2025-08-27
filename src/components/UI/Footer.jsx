import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-zinc-900 text-white">
        <div className="text-center md:text-left flex max-md:justify-start max-sm:justify-start justify-center items-center gap-4 mt-2 mb-2">
          {/* icon */}
          <div>
            <FaLocationDot className="inline-block text-4xl text-blue-800 mb-2" />
          </div>
          <div className="flex flex-col justify-center max-md:items-start max-sm:items-start">
            <div>
              <p className=" font-semibold">Find us at:</p>
            </div>
            <div>
              <p>Jaipur,Rajasthan</p>
            </div>
          </div>
        </div>
        <a
          href="tel:+918475851985"
          className="text-center md:text-left flex max-md:justify-start max-sm:justify-start justify-center gap-4 mt-2 mb-2 hover:text-white"
        >
          {/* icon */}
          <div>
            <IoIosCall className="inline-block text-4xl text-blue-800 mb-2" />
          </div>

          <div className="flex flex-col justify-center max-md:items-start max-sm:items-start">
            <div>
              <p className="font-semibold">Call us at:</p>
            </div>
            <div>+91 8475851985</div>
          </div>
        </a>

        <a
          href="mailto:hiteshkandari@gmail.com"
          className="text-center md:text-left flex max-md:justify-start max-sm:justify-start justify-center gap-4 mt-2 mb-2 hover:text-white"
        >
          {/* icon */}
          <div>
            <SiMinutemailer className="inline-block text-4xl text-blue-800 mb-2" />
          </div>

          <div className="flex flex-col justify-center max-md:items-start max-sm:items-start">
            <div>
              <p className="font-semibold">Mail us at:</p>
            </div>
            <div>
              <p>hiteshkandari@gmail.com</p>
            </div>
          </div>
        </a>
      </div>

      <div className="w-full flex justify-between items-center bg-zinc-900 p-3 max-md:flex-col max-md:gap-4 max-sm:flex-col max-sm:gap-4">
        <p className="text-zinc-400 bg-zinc-900">
          &copy; {new Date().getFullYear()} AtlasPedia. All rights reserved.
        </p>
        <p className="text-zinc-400">Made with &nbsp;<FaHeart className="text-red-500 text-xl inline"/>&nbsp; by <span className="text-blue-900 font-medium">Hitesh Kandari</span></p>
        <ul className="flex items-center gap-4">
          <li className="text-zinc-400">Follow me on:</li>
          <li>
            <a
              href="https://www.linkedin.com/in/hiteshkandari2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaLinkedin className="text-blue-900 text-3xl"/>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Hitesh04codebot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <IoLogoGithub className="text-zinc-600 text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
