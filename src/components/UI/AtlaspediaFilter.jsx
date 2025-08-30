import { FaSearch } from "react-icons/fa";

// components/UI/AtlaspediaFilter.jsx
function AtlaspediaFilter({region,setRegion,searchTerm,setSearchTerm,sortOrder,setSortOrder,}) 
{
  return (
    <div
    className="relative flex flex-col md:flex-row justify-between items-center gap-4 p-6 max-w-7xl mx-auto">
      {/* Search Box */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-zinc-800"
      />

      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        {/* Region Dropdown */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-zinc-800 w-full md:w-auto"
        >
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        {/* Sort Button */}
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
          className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition w-full md:w-auto"
        >
          Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
        </button>
      </div>
    </div>
  );
}

export default AtlaspediaFilter;
