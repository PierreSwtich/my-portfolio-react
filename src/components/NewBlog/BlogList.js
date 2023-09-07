import React from 'react';
import BlogItem from './BlogItem';
import '../../Assets/css/blog.css';
const BlogList = ({ blogs, content }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem key={blog.slug} blog={blog} content={content}/>
      ))}
    </div>
  );
};
export default BlogList;