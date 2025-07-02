// frontend/src/api/userApi.js
import axiosClient from './axiosClient';

export const getUsers = async () => {
  const response = await axiosClient.get('users/');
  return response.data;
};
