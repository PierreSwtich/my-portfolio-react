// eslint-disable-next-line no-unused-vars
import {React,  useState, useEffect, Suspense } from 'react';
import EmptyList from '../components/NewBlog/EmptyList';
import BlogList from '../components/NewBlog/BlogList';
import BlogHeader from '../components/NewBlog/BlogHeader';
// import SearchBar from './components/NewBlog/SearchBar';
// import { fetchPosts } from './config/Api';
import ParticlesComponent from '../components/Particles';
import { Helmet } from 'react-helmet';
import { fetchBlogPosts } from '../utils/API/butterFetchPosts';
// import Preloader from '../components/Pre'
import { butterFetchSearchQuery } from '../utils/API/butterFetchSearchQuery';
import SimpleSearchBar from '../components/NewBlog/SimpleSearchBar';
import ContentLoader from '../components/ContentLoader';
// import SimpleSearchBar from '../components/NewBlog/SimpleSearchBar';


  const HomeBlog = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);

    // useEffect(() => {
    //   const loadData = async () => {
    //     try {
    //       const posts = await fetchBlogPosts();
    //       setBlogPosts(posts);
    //     } catch (error) {
    //       setError(true);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   loadData();
    // }, []);

    useEffect(() => {
      const loadData = async () => {
        try {
          let posts;
  
          if (searchQuery) {
            // Fetch posts by search query
            posts = await butterFetchSearchQuery(searchQuery);
          } else {
            // Fetch all blog posts
            posts = await fetchBlogPosts();
          }
  
          setBlogPosts(posts);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) {
      return <h1>Something went wrong while loading data...</h1>;
    }

    if (loading) {
      return <ContentLoader />;
    }

  return (
    <div className=".blogContainer">
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
    <BlogHeader />
    <SimpleSearchBar />
    {/* <SimpleSearchBar
          value={searchQuery}
          handleSearchKey={(e) => setSearchQuery(e.target.value)}
    /> */}
    {/* Search Bar */}
    {/* <SearchBar
      value={searchKey}
      clearSearch={handleClearSearch}
      formSubmit={handleSearchBar}
      handleSearchKey={(e) => setSearchKey(e.target.value)}
    /> */}
    {/* Blog List & Empty View */}
    {!blogPosts.length ? <EmptyList /> : <BlogList blogs={blogPosts} content = {blogPosts}/>}
  </div>
  </div>
  );
};

export default HomeBlog;