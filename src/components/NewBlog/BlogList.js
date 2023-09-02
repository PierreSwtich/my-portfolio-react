import React from 'react';
import BlogItem from './BlogItem';
import '../../blog.css';
const BlogList = ({ blogs, content }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} content={content}/>
      ))}
    </div>
  );
};
export default BlogList;