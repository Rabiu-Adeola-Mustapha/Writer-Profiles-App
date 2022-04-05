import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/navbar/Navbar";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />}>
          <Route path="" element={<BlogList/>} />
          <Route path=":blog" element={<BlogDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
