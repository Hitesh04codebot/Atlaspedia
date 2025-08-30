import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loadinggif from "../../assets/lottie/loading.json";
import Lottie from "lottie-react";
import { motion } from "motion/react";

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        console.log("Fetching country:", decodeURIComponent(id));
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${decodeURIComponent(id)}?fullText=true`
        );
        setCountry(response.data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loadinggif} loop={true} className=" text-3xl" />;
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex justify-center items-center">
      {country &&
        country.map((c, index) => (
          <div
            key={index}
            className="flex flex-row w-full items-center bg-zinc-800 py-10 px-20 gap-50 
             max-lg:flex-col max-lg:gap-30 max-sm:px-10 max-sm:py-5 max-sm:gap-15 max-sm:border-none "
          >
            {/* Left - Flag */}
            <motion.div
              initial={{ x: -200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 0.8, ease: "easeOut" }} // smooth effect
              className="flex w-1/2 flex-row justify-start max-lg:w-full"
            >
              <img
                src={c.flags.svg}
                alt={c.flags.alt}
                className="w-full max-w-[700px] h-auto object-cover rounded-lg shadow-[0_0_30px_white]"/>
            </motion.div>

            {/* Right - Details */}
            <div className="flex w-1/2 flex-col justify-evenly items-start gap-7 text-white max-lg:w-full ">
              <motion.h1 
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 0.8, ease: "easeOut" }} // smooth effect
              className="text-3xl font-bold mb-4">{c.name.common}</motion.h1>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 0.9, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Official Name is: </span>{" "}
                {c.name.official}
              </motion.p>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 1, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Capital:</span>{" "}
                {c.capital ? c.capital[0] : "N/A"}
              </motion.p>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 1.1, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Region:</span> {c.region}
              </motion.p>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 1.2, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Subregion:</span> {c.subregion}
              </motion.p>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 1.3, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Population:</span>{" "}
                {c.population.toLocaleString("en-IN")}
              </motion.p>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 1.4, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Languages:</span>{" "}
                {c.languages ? Object.values(c.languages).join(", ") : "N/A"}
              </motion.p>
              <motion.p
              initial={{ x: 200, opacity: 0 }} // starts from left
              animate={{ x: 0, opacity: 1 }} // moves to normal position
              transition={{ duration: 1.5, ease: "easeOut" }} // smooth effect
              >
                <span className="font-semibold">Currencies:</span>{" "}
                {c.currencies
                  ? Object.keys(c.currencies)
                      .map((cur) => c.currencies[cur].name)
                      .join(", ")
                  : "N/A"}
              </motion.p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CountryDetails;
