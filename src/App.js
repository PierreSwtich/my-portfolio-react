import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Preloader from "../src/components/Pre";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import Home from "./templates/Home";
import About from "./containers/About";
import ScrollToTop from "./components/ScrollToTop";
import "./Assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyResume from './templates/MyResume';
import Projects from './templates/Projects';
// import BlogPage from './components/Blog/Blog';
import HomeBlog from './templates/HomeBlog';
import { PostPage } from './containers/BlogPost'
import NotFoundPage from './templates/404';


function App() {
  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1000);
    return () => clearTimeout(timer)
  });

  return (

    <Router>
      <Preloader load={load} />
      <div className='page-wrapper'>
        <div className="App" id={false ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<MyResume />} />
            <Route path="/miniProjects" element={<Navigate to="/"/>} />
            <Route path="/new-blog" element={<HomeBlog />} />
            <Route path="/new-blog/category" element={<HomeBlog />} />
            <Route path="/new-blog/search" element={<HomeBlog />} />
            <Route path="/new-blog/:slug" element={<PostPage />} />
            {/* <Route path="*" element={<Navigate to="/"/>} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;