// HomePage.jsx
import React, { createContext, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useAxios from "../../services/unsplashAPI";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
export const ImageContext = createContext(null);

function HomePage() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios();

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Clear local storage on page load
    localStorage.clear();
    fetchRandomBackgroundImage();
  }, []);

  useEffect(() => {
    if (!searchImage) {
      fetchRandomBackgroundImage();
    } else {
      setBackgroundImage(""); // Clear background image when search is performed
    }
  }, [searchImage]);

  const fetchRandomBackgroundImage = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?query=nature&client_id=msD46h5zm57xXHNl05BkL3kRHiwMLPYKNxV7ru3i1Bo"
      );
      const data = await response.json();
      setBackgroundImage(data.urls.regular);
    } catch (error) {
      console.error("Error fetching random background image:", error);
    }
  };

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <div>
      <div
        className="h-screen bg-cover bg-center p-3"
        style={{
          backgroundImage: searchImage ? "" : `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-gray-800 bg-opacity-50 ">
          <SearchBar />
        </div>

        <ImageContext.Provider value={value}>
          <ImageGallery />
        </ImageContext.Provider>
      </div>
    </div>
  );
}

export default HomePage;
