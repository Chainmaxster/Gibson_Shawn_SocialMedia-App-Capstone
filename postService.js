import axios from 'axios';

const API_URL = 'http://localhost:6001/posts';

export const getFeedPosts = async (token) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createPost = async (postData, token) => {
  const response = await axios.post(API_URL, postData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const likePost = async (postId, token) => {
  const response = await axios.patch(`${API_URL}/${postId}/like`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
