// eslint-disable-next-line no-unused-vars
import {React,  useState, useEffect, Suspense } from 'react';
import EmptyList from '../components/NewBlog/EmptyList';
import BlogList from '../components/NewBlog/BlogList';
import BlogHeader from '../components/NewBlog/BlogHeader';
// import SearchBar from './components/NewBlog/SearchBar';
// import { fetchPosts } from './config/Api';
import ParticlesComponent from '../components/Particles';
import { Helmet } from 'react-helmet';
// import { fetchPosts2 } from '../utils/butterAPI';
// import { usePromise } from '../utils/usePromise';
// import { butterCMS } from '../utils/butterSDK/buttercmssdk';
import { fetchBlogPosts } from '../utils/API/butterFetchPosts';
// import Home from '../templates/Home';

// const fetchPostPromise = fetchPosts2();

// const BlogPostsPage = () => {
//   return (
//   <Suspense fallback={<span>Loading...</span>}>
//     <BlogPosts2 />
//   </Suspense>
//   );
// };

// export default BlogPostsPage;

  const HomeBlog = () => {
  // // const posts = usePromise(() => fetchPosts2(), [])
  // const posts = fetchPostPromise;

  // console.log(posts)
  // if (posts === null) return (<div>Sorry i broke the code..</div>)

  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true); // Add loading state
  // const [blogPosts, setBlogPosts] = useState([]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       // Load all posts using the butterCMS instance
  //       const posts = await butterCMS.post.list({page: 1, page_size: 10});
  //       setBlogPosts(posts.data.data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false); // Set loading to false after data is loaded or error occurs
  //     }
  //   };

  //   loadData();
  // }, []);

  // if (error) {
  //   console.log(error)
  //   const posts = butterCMS.post.list();
  //   console.log(posts)
  //   return <h1>Something went wrong while loading data...</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>; // Display a loading indicator
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    return <h1>Something went wrong while loading data...</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
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

// const BlogPosts = () => {
//   // get content from buttercms
// useEffect(() => {
//   fetchPosts().then((res) => {
//       setBlogs(res);
//   })
// } , []);

//   const [blogs, setBlogs] = useState([]);
//   const [searchKey, setSearchKey] = useState('');
//   // Search submit
//   const handleSearchBar = (e) => {
//     e.preventDefault();
//     handleSearchResults();
//   };
//   // Search for blog by category
//   const handleSearchResults = () => {
//     const filtered = blogs.filter((blog) => {
//       return blog.tags[0].name.toLowerCase().includes(searchKey.toLowerCase());
//     });
//     setBlogs(filtered);
//   };
//   // Clear search and show all blogs
//   const handleClearSearch = () => {
//     fetchPosts().then((res) => {
//       setBlogs(res);
//     })
//     setSearchKey("");
//   };

// //   // function to get selected blog content
// //  const BlogContent = (id) => {
// //   data(id);
// // }


//   return (
//     <container className=".blogContainer">
//       <Helmet>
//         <title>QAwithPierre | Blog</title>
//         <meta name="description" content="Read my blog posts about manual testing and automation in the software industry." />

//         {/* Google / Search Engine Tags */}
//         <meta name="author" content="Adam Stolarski" />
//         <meta itemprop="name" content="QAwithPierre | Blog" />
//         <meta itemprop="description" content="Read my blog posts about manual testing and automation in the software industry." />
//         <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

//         {/* Facebook Meta Tags */}
//         <meta property="og:url" content="https://qawithpierre.pl/blog" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="QAwithPierre | Blog" />
//         <meta property="og:description" content="Read my blog posts about manual testing and automation in the software industry." />
//         <meta property="og:image" content="https://qawithpierre.pl/your-image-url.jpg" />

//         {/* Twitter Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:creator" content="@YourTwitterHandle" />
//         <meta name="twitter:title" content="QAwithPierre | Blog" />
//         <meta name="twitter:description" content="Read my blog posts about manual testing and automation in the software industry." />
//         <meta name="twitter:image" content="https://qawithpierre.pl/your-image-url.jpg" />
//       </Helmet>
//     <ParticlesComponent />
//     <div className='blog-main-wrapper'>
//       {/* Page Header */}
//       <Header />
//       {/* Search Bar */}
//       <SearchBar
//         value={searchKey}
//         clearSearch={handleClearSearch}
//         formSubmit={handleSearchBar}
//         handleSearchKey={(e) => setSearchKey(e.target.value)}
//       />
//       {/* Blog List & Empty View */}
//       {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content = {null}/>}
//     </div>
//     </container>
//   );
// };
// export default BlogPosts;