import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const fetchChats = async (id) => {
  const response = await api.get(`/chats/${id}`);
  return response.data;
};

export const fetchMessages = async (id) => {
  const response = await api.get(`/messages/${id}`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = (id) => {
  const response = api.get(`/user/${id}`);
  return response.data;
};

export const sendMessage = async (body) => {
  const response = await api.post('/message', body);
  return response.data;
};

export const createChat = async (body) => {
  const response = await api.post('/chat', body);
  return response.data;
};

export const logIn = (body) => {
  const response = api.post('/login', body);
  return response;
};

export const register = async (body) => {
  const response = await api.post('/register', body);
  return response;
};
