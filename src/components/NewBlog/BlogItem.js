import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Chip from './Chip';
import '../../Assets/css/blog.css';
import { BsArrowRightShort } from 'react-icons/bs';



const BlogItem = ({blog, content}) => {
  // const createdDate = content.created
  // const formattedDate = createdDate.toLocaleDateString();
  
  return (
   <div className='blogItem-wrap'>
      <Link to={`/new-blog/${blog.slug}`} onClick={() => content(blog)}>
      <img className='blogItem-cover' src={blog.featured_image} alt='cover' />
      </Link>
      <Chip label={blog.tags[0].name} />
      <h3>{blog.title}</h3>
      <p className='blogItem-desc'>{blog.summary}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={blog.author.profile_image} alt='avatar' />
          <div>
            <h6>{blog.author.first_name+" "+blog.author.last_name}</h6>
            <p>{content.created}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/new-blog/${blog.slug}`} onClick={()=>{content(blog)}}>
          <BsArrowRightShort style={{fill: 'white'}}/>
        </Link>
      </footer>
    </div>
  );
};


export default BlogItem;