import React from 'react';
// logoutUtils.js

import { useDispatch } from 'react-redux';
import { clearUserInfo } from '../../Redux/user/UserInfoReducer';
import { logout } from '../../Redux/user/AuthReducer';
import { useNavigate } from 'react-router-dom';

const handleLogout = () => {
  const dispatch = useDispatch();

  const performLogout = () => {
    localStorage.removeItem('userData');
    dispatch(clearUserInfo());
    dispatch(logout());
  };

  return performLogout;
};

export default handleLogout;
