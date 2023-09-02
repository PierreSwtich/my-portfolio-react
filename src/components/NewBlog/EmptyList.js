import React from 'react';
import '../../blog.css';
import gifEmpty from '../../Assets/empty.gif'
const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={gifEmpty} alt='empty' />
  </div>
);
export default EmptyList;