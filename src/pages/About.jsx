import React from "react";
import countryfacts from "../api/countryData.json";
import { motion } from "motion/react";

const About = () => {
  return (
    <div>
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}       
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}      
        className="text-white font-semibold text-4xl text-center mt-6">
        Here are some interesting facts <br /> about some{" "}
        <span className="text-blue-800 font-semibold text-4xl">Countries</span>.
      </motion.div>

      {/* Country Grid */}
      <div className="grid grid-cols-3 gap-8 mx-10 my-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
        {countryfacts.map((country) => (
          <motion.div
            initial={{ opacity: 0, y: 0 }}       
            whileInView={{ opacity: 1, y: 0 }}    
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} 
            key={country.id}
            className="bg-zinc-800 p-6 rounded-lg  text-white border-blue-800 shadow-[0_0_10px_rgb(59,130,246)] hover:scale-102 transition-transform duration-500 "
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              {country.name}
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Capital:</span> <span>{country.capital}</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Population:</span> {country.population.toLocaleString("en-IN")}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Interesting Facts:</span>{country.interestingFact}
              {country.languages}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
