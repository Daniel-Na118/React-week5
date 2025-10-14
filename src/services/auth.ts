import axios from 'axios';

<<<<<<< HEAD
const API_BASE_URL = 'https://api-internhasha.wafflestudio.com';

export const signup = async (name, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/user`, {
=======
export const signup = async (name: string, email: string, password: string) => {
  const response = await axios.post(`/api/auth/user`, {
>>>>>>> 464a639 (style and logic)
    authType: 'APPLICANT',
    info: {
      type: 'APPLICANT',
      name,
      email,
      password,
      successCode: 'string',
    },
  });
  return response.data;
};

<<<<<<< HEAD
export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/user/session`, {
=======
export const login = async (email: string, password: string) => {
  const response = await axios.post(`/api/auth/user/session`, {
>>>>>>> 464a639 (style and logic)
    email,
    password,
  });
  return response.data;
};

<<<<<<< HEAD
export const getUserInfo = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/api/auth/me`, {
=======
export const getUserInfo = async (token: string) => {
  const response = await axios.get(`/api/auth/me`, {
>>>>>>> 464a639 (style and logic)
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
