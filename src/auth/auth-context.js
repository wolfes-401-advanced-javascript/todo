import React, { useState, useEffect } from 'react';
import cookies from 'react-cookies';
import jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();
const API_URL = process.env.API_URL || 'http://localhost:3030';

const AuthProvider = (props) => {

  const [user, setUser] = useState({});

  const login = (username, password) => {
    const base64String = btoa(`${username}:${password}`);
    const header = { 'Authorization': `Basic ${base64String}` };
    console.log(username, password, header);

    fetch(`${API_URL}/signin`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers(header),
    })

      .then(response => response.text())
      .then(token => {
        let user = jwt.decode(token) || {};
        cookies.save('auth', token);
        setUser(user);
      })
      .catch(console.warn);
  };

  const logout = () => {
    setUser({});
    cookies.remove('auth');
  };

  const userInfo = {
    user,
    login,
    logout,
  };

  useEffect(() => {
    const cookieToken = cookies.load('auth');
    const user = jwt.decode(cookieToken) || {};
    setUser(user);
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
