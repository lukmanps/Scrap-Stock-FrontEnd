import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserSignUp from './pages/user/UserSignUpPage';
import UserLogin from './pages/user/UserLoginPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import Home from './pages/user/HomePage';
import { ThemeProvider } from '@mui/material';
import GlobalTheme from './Theme/GlobalTheme';

import AdminLogin from './pages/admin/AdminLoginPage';
import { useSelector } from 'react-redux';

function App() {
  
  const user = useSelector((state)=> state.userInfo);

  // useEffect(()=>{
  //   const user = useSelector((state)=> state.userInfo);
  // });

  return (
      <ThemeProvider theme={GlobalTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            


            <Route path='/admin/login' element={<AdminLogin/>} />
            <Route path='/admin/adminDashboard' element={<AdminDashboard/>} />
            {/* <Route path='*' element={<PageNotFound/>}/> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
