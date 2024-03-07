import React, { useContext, useState, useEffect } from "react";
import { ImageContext } from "../../pages/Home/HomePage";
import Image from "./Image";
import StarredImagesPage from "../../pages/StarredImagesPage/StarredImagesPage";

const ImageGallery = () => {
  const { response, isLoading } = useContext(ImageContext);
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
    let updatedStarredImages;
    if (starredImages.includes(imageUrl)) {
      updatedStarredImages = starredImages.filter((url) => url !== imageUrl);
    } else {
      updatedStarredImages = [...starredImages, imageUrl];
    }
    setStarredImages(updatedStarredImages);
    localStorage.setItem("starredImages", JSON.stringify(updatedStarredImages));
  };

  const isImageStarred = (imageUrl) => {
    return starredImages.includes(imageUrl);
  };

  const Skeleton = ({ item }) => {
    return [...Array(item).keys()].map((_, index) => (
      <div
        key={index}
        className="animate-pulse relative mb-4 before:content-[''] before:absolute before:inset-0"
      >
        <div className="bg-gray-300 h-80"></div>
      </div>
    ));
  };

  return (
    <div className="px-4 md:px-0 mt-20">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 my-8 max-w-7xl mx-auto ">
        {isLoading ? (
          <Skeleton item={20} />
        ) : (
          response.map((data, key) => (
            <Image
              key={key}
              data={data}
              isStarred={isImageStarred(data.urls.full)}
              onToggleStar={() => toggleStar(data.urls.full)}
            />
          ))
        )}
      </div>
      <StarredImagesPage starredImages={starredImages} />
    </div>
  );
};

export default ImageGallery;
