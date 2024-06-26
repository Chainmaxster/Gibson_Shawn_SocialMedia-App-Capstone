import axios from 'axios';

const API_URL = 'http://localhost:6001/users';

export const getUser = async (userId, token) => {
  const response = await axios.get(`${API_URL}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserFriends = async (userId, token) => {
  const response = await axios.get(`${API_URL}/${userId}/friends`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addRemoveFriend = async (userId, friendId, token) => {
  const response = await axios.patch(`${API_URL}/${userId}/friend/${friendId}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
