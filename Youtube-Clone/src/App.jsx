import React from "react";
import Navbar from "./components/navbars/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home.jsx";
import Video from "../src/pages/video/Video.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
