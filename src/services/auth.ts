import axios from 'axios';

const API_BASE_URL = 'https://api-internhasha.wafflestudio.com';

export const signup = async (name, email, password) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/user`, {
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

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/user/session`, {
    email,
    password,
  });
  return response.data;
};

export const getUserInfo = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
