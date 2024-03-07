import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function StarredImagesPage() {
  const [starredImages, setStarredImages] = useState([]);

  useEffect(() => {
    const storedStarredImages = JSON.parse(
      localStorage.getItem("starredImages")
    );
    if (storedStarredImages) {
      setStarredImages(storedStarredImages);
    }
  }, []);

  const toggleStar = (imageUrl) => {
    const updatedStarredImages = starredImages.filter(
      (image) => image !== imageUrl
    );
    setStarredImages(updatedStarredImages);
    localStorage.setItem("starredImages", JSON.stringify(updatedStarredImages));
  };

  return (
    <div>
      <SearchBar />
      <div className="px-4 md:px-0 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-7xl mx-auto ">
          {starredImages.map((imageUrl, index) => (
            <div key={index} className="relative">
              <div className="absolute top-0 right-0 z-10">
                <div
                  className="delete-icon  text-gray-300 hover:text-red-500"
                  onClick={() => toggleStar(imageUrl)}
                  style={{ fontSize: "24px", cursor: "pointer" }}
                >
                  <FaTrash />
                </div>
              </div>
              <img
                className="w-full h-auto shadow-md"
                src={imageUrl}
                alt={`Starred Image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
