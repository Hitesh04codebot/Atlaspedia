import { useEffect, useState } from "react";
import axios from "axios";
import loadinggif from "../assets/lottie/loading.json";
import Lottie from "lottie-react";
import Cards from "../components/UI/Cards";
import AtlaspediaFilter from "../components/UI/AtlaspediaFilter";
import ScrollToTop from "react-scroll-to-top";

function Country() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [region, setRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

useEffect(() => {
  const fetchCountries = async () => {
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
  };

  fetchCountries();
}, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loadinggif} loop={true} className="text-3xl" />
      </div>
    );
  }

//Filter Logic
const filteredCountries = countries
  .filter((country) => 
    (region === "All" || country.region === region) &&
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.common.localeCompare(b.name.common);
    } else {
      return b.name.common.localeCompare(a.name.common);
    }
  });


  return (
    <>
      <AtlaspediaFilter
        region={region}
        setRegion={setRegion}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <Cards country={country} key={index} />
          ))
        ) : (
          <div className="text-center flex justify-center items-center text-lg text-gray-500 h-screen col-span-full">
            No countries found.
          </div>
        )}
        <ScrollToTop 
          smooth 
          style={{ 
            marginTop: "150vh",
            backgroundColor: "blue",
            padding: "2px",
            margin: "auto",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: "1000",
            
            }}/>  
      
      </div>
    </>
  );
}

export default Country;
