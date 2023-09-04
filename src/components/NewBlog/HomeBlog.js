// eslint-disable-next-line no-unused-vars
import {React,  useState, useEffect } from 'react';
import EmptyList from './EmptyList';
import BlogList from './BlogList';
import Header from './Header';
import SearchBar from './SearchBar';
import { blogList } from './config/Api';
import ParticlesComponent from '../Particles';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>QAwithPierre | Blog</title>
        <meta name="description" content="Read my blog posts about manual testing and automation in the software industry." />

        {/* Google / Search Engine Tags */}
        <meta name="author" content="Adam Stolarski" />
        <meta itemprop="name" content="QAwithPierre | Blog" />
        <meta itemprop="description" content="Read my blog posts about manual testing and automation in the software industry." />
        <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://qawithpierre.pl/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QAwithPierre | Blog" />
        <meta property="og:description" content="Read my blog posts about manual testing and automation in the software industry." />
        <meta property="og:image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="QAwithPierre | Blog" />
        <meta name="twitter:description" content="Read my blog posts about manual testing and automation in the software industry." />
        <meta name="twitter:image" content="https://qawithpierre.pl/your-image-url.jpg" />
      </Helmet>
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