/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import { wrapPromise } from './wrap-promise';

const readToken = process.env.REACT_APP_BUTTER_CMS_API_KEY;


export const fetchPosts = async () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=${readToken}`;
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export const fetchSinglePost = (slug) => {
  const url = `
  https://api.buttercms.com/v2/posts/${slug}?auth_token=${readToken}`;
  let axiosfetch = axios(url).then(
    (r) => r.data.data
  )

  return axiosfetch
}

export const fetchPosts2 = () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=${readToken}`;
  let axiosfetch = axios(url).then(
    (r) => r.data.data
  )

  return axiosfetch
 };