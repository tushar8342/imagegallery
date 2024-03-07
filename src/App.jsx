import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import StarredImagesPage from "./pages/StarredImagesPage/StarredImagesPage";

const App = () => {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isHomePageVisible ? (
            <HomePage />
          ) : (
            <Navigate to="/starredimages" replace />
          )
        }
      />
      <Route path="/starredimages" element={<StarredImagesPage />} />
    </Routes>
  );
};

export default App;
