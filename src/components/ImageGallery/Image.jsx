import React from "react";

const Image = ({ data, isStarred, onToggleStar }) => {
  const toggleStar = (event) => {
    event.stopPropagation();
    onToggleStar(data.id);
  };

  return (
    <div className="relative mb-6">
      <div className="absolute top-0 right-0">
        <div
          className={`star ${
            isStarred ? "text-yellow-500" : "text-gray-300"
          } hover:text-yellow-500`}
          onClick={toggleStar}
          style={{ fontSize: "24px", cursor: "pointer" }}
        >
          {isStarred ? "★" : "☆"}
        </div>
      </div>
      <img
        className="w-full shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default Image;
