import React from 'react';
import UserNavBar from '../NavBar/UserNavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Layout