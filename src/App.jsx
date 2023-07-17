import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import GlobalTheme from './Theme/GlobalTheme';

//Layouts
import AdminLayout from './components/admin/layout/Layout';
import UserLayout from './components/user/layout/Layout';


//User Pages
import UserSignUp from './pages/user/UserSignUpPage';
import UserLogin from './pages/user/UserLoginPage';
import Home from './pages/user/HomePage';

//Admin Pages
import AdminLogin from './pages/admin/AdminLoginPage';
import UserManagement from './pages/admin/UserManagement';
import AdminDashboard from './pages/admin/AdminDashboardPage';
import ViewUserPage from './pages/admin/ViewUserPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

//Redux State
import { isAdmin } from './Redux/admin/AdminInfoReducer';
import { addUserInfo } from './Redux/user/UserInfoReducer';
import { isUser } from './Redux/user/AuthReducer';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authUser);
  const admin = useSelector((state) => state.adminInfo);

  // const user = localStorage.getItem('userData');
  // const admin = localStorage.getItem('adminInfo');

  useEffect(() => {
    dispatch(isUser(user));
    dispatch(isAdmin(admin));
  }, [dispatch]);

  return (
    <ThemeProvider theme={GlobalTheme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/login' element={user ? <Navigate to={'/'} replace={true} /> : <UserLogin />} />
          <Route path='/signup' element={user ? <Navigate to={'/'} replace={true} /> : <UserSignUp />} />

          <Route path='/' element={user ? <UserLayout /> : <Home/>}>
            <Route index element={<Home/>} />
          </Route>



          <Route path='/admin/login' element={admin ? <Navigate to={'/admin'} replace={true} /> : <AdminLogin />} />

          <Route path='/admin' element={admin ? <AdminLayout /> : <Navigate to={'/admin/login'} replace={true} />} >
            <Route index  element={<AdminDashboardPage />} />
            <Route path='user-management' element={<UserManagement/>} />
            <Route path='/admin/view-user/:id' element={<ViewUserPage/>} />
          </Route>
          {/* <Route path='*' element={<PageNotFound/>}/> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
