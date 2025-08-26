import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-zinc-900 text-white'>
      <div className='text-center md:text-left'>
        {/* icon */}
        <div>
          <FaLocationDot className='inline-block text-4xl text-blue-800 mb-2'/>
        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default Footer