import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
