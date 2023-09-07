import React from 'react';
import '../../Assets/css/blog.css';
import gifEmpty from '../../Assets/images/empty.gif'
const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={gifEmpty} alt='empty' />
  </div>
);
export default EmptyList;