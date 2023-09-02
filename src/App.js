import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Preloader from "../src/components/Pre";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyResume from './components/Resume/MyResume';
import Projects from './components/Projects/Projects';
import BlogPage from './components/Blog/Blog';
import HomeBlog from './components/NewBlog/HomeBlog'
import BlogPost from './components/NewBlog/BlogPost'


function App() {
  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer)
  });

  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog)
  }


  return (

    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="/miniProjects" element={<Navigate to="/"/>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/blog-home" element={<HomeBlog data={getData}/> } />
          <Route path="/blog:id" element={<BlogPost content={getBlogContent} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
