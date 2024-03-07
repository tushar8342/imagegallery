import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import StarredImagesPage from "./pages/StarredImagesPage/StarredImagesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/starredimages" exact element={<StarredImagesPage />} />
    </Routes>
  );
};

export default App;
