/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

const readToken = process.env.REACT_APP_READ_TOKEN;


export const blogList = async () => {
    const url = `
    https://api.buttercms.com/v2/posts?auth_token=${readToken}`;
    return axios.get(url).then((res) => {
      return res.data.data;
    });
  };

  blogList()

  console.log(blogList())