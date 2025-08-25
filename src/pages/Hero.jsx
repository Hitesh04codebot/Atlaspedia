import React from "react";
import world from "../assets/images/world.png";
import Lottie from "lottie-react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react"
import worldAnimation from "../assets/lottie/worldAnimation.json"
function Hero() {
  return (
    <div className="flex justify-between items-center mx-10 max-md:flex-col max-md:mx-4">
      <div className="box-border mt-3 flex flex-col justify-center items-start w-1/2 p-20 max-md:w-full max-md:p-2 ">
        <motion.div 
            className="text-4xl font-bold text-blue-600"
            initial={{ x: -100, opacity: 0 }}   // Start 200px left
            animate={{ x: 0, opacity: 1 }}      // Slide to original spot
            transition={{ duration: 0.8, ease: "easeOut" }}>Explore the World!</motion.div>
        <motion.p 
            className="mt-4 text-lg font-semibold text-white"
            initial={{ x: 0, opacity: 0 }}   // stays in the same spot
            animate={{ x: 0, opacity: 1 }}      
            transition={{ duration: 3, ease: "easeOut" }}>
          Discover the history, culture and beauty of every nation. Sort, filter
          and search through countries to find details you need.
        </motion.p>
        <motion.button 
            className="bg-blue-600 text-white mt-3 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold flex items-center gap-2 "
            initial={{ x: 0, opacity: 0 }}   // stays in the same spot
            animate={{ x: 0, opacity: 1 }}      
            transition={{ duration: 3, ease: "easeOut" }}>
        Get Started <FiArrowRight className="font-semibold" />
      </motion.button>
      </div>
      <div className="w-1/2 flex justify-center items-center max-md:w-full max-md:mt-6">
        <motion.div>
          <Lottie animationData={worldAnimation} loop={true} className="w-full h-auto" />;
        </motion.div>
      </div>
    </div> 
  );
}

export default Hero;
