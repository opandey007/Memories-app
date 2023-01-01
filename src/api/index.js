import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedData) =>
  axios.patch(`${url}/${id}`, updatedData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);
