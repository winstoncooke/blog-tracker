import axios from 'axios';
const baseUrl = '/api/users';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getById = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`);
  return request.data;
};

const register = async (user) => {
  const request = await axios.post(baseUrl, user);
  return request.data;
};

export default { getAll, getById, register };
