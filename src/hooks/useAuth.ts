import { useEffect, useState } from 'react';
import { getUserInfo } from '../services/auth';

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getUserInfo(token)
        .then(setUser)
        .catch(() => {
          localStorage.removeItem('token');
          setToken(null);
        });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return { token, user, login, logout };
};
