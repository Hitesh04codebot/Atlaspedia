import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Cards(props) {
  const { country } = props;
  return (
    <div className="bg-zinc-800 p-6 rounded-lg text-white border border-blue-800 shadow-[0_0_10px_rgb(59,130,246)]">
      {/* Flag */}
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="w-full h-32 object-cover rounded mb-4 border border-zinc-700"
      />

      {/* Country Name */}
      <h2 className="text-2xl font-bold mb-2 text-blue-500">
        {country.name.common}
      </h2>

      {/* Capital */}
      <p className="mb-2">
        <span className="font-semibold">Capital:</span>{" "}
        {country.capital ? country.capital[0] : "N/A"}
      </p>

      {/* Region */}
      <p className="mb-2">
        <span className="font-semibold">Region:</span> {country.region}
      </p>

      {/* Population */}
      <p className="mb-2">
        <span className="font-semibold">Population:</span>{" "}
        {country.population.toLocaleString("en-IN")}
      </p>

      <NavLink
        to={`/country/${encodeURIComponent(country.name.common)}`}
        className="flex flex-row justify-end items-center"
      >
        <button className="bg-zinc-900 p-3 rounded-full font-semibold cursor-pointer mt-2">
          <FaLongArrowAltRight className="inline text-2xl" />
        </button>
      </NavLink>
    </div>
  );
}

export default Cards;
