import React, { useEffect, useState } from "react";
import axios from "axios";
import loadinggif from "../assets/lottie/loading.json"
import Lottie from "lottie-react";
import Cards from "../components/UI/Cards";

function Country() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  (async () => {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,flags,capital"
      );
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  })();
}, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loadinggif} loop={true} className=" text-6xl" />;
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {countries.map((country, index) => {
        return <Cards country={country} key={index} />
    })}
    </div>
  );
}

export default Country;
