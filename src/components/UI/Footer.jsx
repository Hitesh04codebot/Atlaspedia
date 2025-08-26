import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-zinc-900 text-white'>
      <div className='text-center md:text-left flex max-md:justify-start max-sm:justify-start justify-center items-center gap-4 mt-2 mb-2'>
        {/* icon */}
        <div>
          <FaLocationDot className='inline-block text-4xl text-blue-800 mb-2'/>
        </div>
        <div className='flex flex-col justify-center max-md:items-start max-sm:items-start'>
          <div>
            <p className=" font-semibold">Find us at:</p>
          </div>
          <div>
            <p>Jaipur,Rajasthan</p>
          </div>
        </div>
      </div>  
      <div className='text-center md:text-left flex max-md:justify-start max-sm:justify-start justify-center gap-4 mt-2 mb-2'>
        {/* icon */}
        <div>
          <IoIosCall className='inline-block text-4xl text-blue-800 mb-2'/>
        </div>
        <div className='flex flex-col justify-center max-md:items-start max-sm:items-start'>
          <div>
            <p className=" font-semibold">Call us at:</p>
          </div>
          <div>
            <p>8475851985</p>
          </div>
        </div>
      </div>  
      <div className='text-center md:text-left flex max-md:justify-start max-sm:justify-start justify-center gap-4 mt-2 mb-2'>
        {/* icon */}
        <div>
          <SiMinutemailer className='inline-block text-4xl text-blue-800 mb-2'/>
        </div>
        <div className='flex flex-col justify-center max-md:items-start max-sm:items-start'>
          <div>
            <p className=" font-semibold">Mail us at:</p>
          </div>
          <div>
            <p>hiteshkandari@gmail.com</p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Footer