// eslint-disable-next-line no-unused-vars
import {React,  useState, useEffect } from 'react';
import EmptyList from './EmptyList';
import BlogList from './BlogList';
import Header from './Header';
import SearchBar from './SearchBar';
import { blogList } from './config/Api';
import ParticlesComponent from '../Particles';

const HomePage = ({data}) => {
  // get content from buttercms
useEffect(() => {
  blogList().then((res) => {
      setBlogs(res);
  })
} , []);

  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  // Search for blog by category
  const handleSearchResults = () => {
    const filtered = blogs.filter((blog) => {
      return blog.tags[0].name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setBlogs(filtered);
  };
  // Clear search and show all blogs
  const handleClearSearch = () => {
    blogList().then((res) => {
      setBlogs(res);
    })
    setSearchKey("");
  };

  // function to get selected blog content
 const BlogContent = (id) => {
  data(id);
}


  return (
    <container className=".blogContainer">
    <ParticlesComponent />
    <div className='blog-main-wrapper'>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content = {BlogContent}/>}
    </div>
    </container>
  );
};
export default HomePage;