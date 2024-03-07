// SearchBar.jsx
import React, { useContext, useState, useCallback } from "react";
import { ImageContext } from "../../pages/Home/HomePage";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext) || {};

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = useCallback(() => {
    if (!searchValue) return;
    fetchData(
      `search/photos?page=1&query=${searchValue}&per_page=20&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );

    setSearchValue("");
    console.log("searchValue:", searchValue);
    setSearchImage(searchValue);
  }, [fetchData, searchValue, setSearchImage]);

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-400 via-purple-400 to-indigo-500 py-3 px-4 fixed top-0 left-0 right-0 ">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center">
          <input
            className="bg-gray-50 border border-gray-300 text-sm w-full p-2.5 outline-none focus:border-sky-500 focus:ring-2 rounded-tl rounded-bl"
            type="search"
            placeholder="Search for images"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
          ></input>
          <button
            onClick={handleSearch}
            disabled={!searchValue}
            className="bg-pink-500 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-#7c3aed-400"
          >
            Search
          </button>
          <Link
            to="/starredimages"
            className="bg-sky-500 px-4 py-2 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 ml-2 disabled:bg-sky-400"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
