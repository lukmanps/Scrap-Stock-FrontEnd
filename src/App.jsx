import React, { useEffect } from 'react';
// import './App.css';
import './components/user/layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GlobalTheme from './Theme/GlobalTheme';

//Layouts
import AdminLayout from './components/admin/layout/Layout';
import UserLayout from './components/user/layout/Layout';


//User Pages
import UserSignUp from './pages/user/user-signup-page';
import UserLogin from './pages/user/user-login-page';
import Home from './pages/user/home-page';
import SellScrapPage from './pages/user/sell-scrap-page';
import CheckPriceListPage from './pages/user/check-price-page';

//Admin Pages
import AdminLogin from './pages/admin/AdminLoginPage';
import UserManagement from './pages/admin/UserManagement';
import AdminDashboard from './pages/admin/AdminDashboardPage';
import ViewUserPage from './pages/admin/ViewUserPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ScrapManagement from './pages/admin/ScrapManagementPage';
import PickupDetailsPage from './pages/admin/PickupDetailsPage';
import PaymentSuccess from './Common/payment-success';

//Redux State
import { isAdmin } from './Redux/admin/AdminInfoReducer';
import { addUserInfo } from './Redux/user/UserInfoReducer';
import { isUser } from './Redux/user/AuthReducer';
import handleLogout from './APIs/user/logoutUtils';
import PickupsPage from './pages/admin/pickupsPage';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.authUser);
  const userData = useSelector((state) => state.userInfo);
  const admin = useSelector((state) => state.adminInfo);

  const doLogout = handleLogout();

  useEffect(() => {
    if (userData.status === false) {
      doLogout();
      navigate('/');
    }
    dispatch(isUser(user));
    dispatch(isAdmin(admin));
  }, [dispatch]);

  return (
    <ThemeProvider theme={GlobalTheme}>

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/login' element={user ? <Navigate to={'/'} replace={true} /> : <UserLogin />} />
        <Route path='/signup' element={user ? <Navigate to={'/'} replace={true} /> : <UserSignUp />} />

        <Route path='/' element={<Home />} />
        <Route path='/check-price-list' element={<CheckPriceListPage />} />



        <Route path='/' element={user ? <UserLayout /> : <Navigate to={'/login'} replace={true} />}>
          <Route path='/sell-scrap' element={<SellScrapPage />} />
        </Route>



        <Route path='/admin/login' element={admin ? <Navigate to={'/admin'} replace={true} /> : <AdminLogin />} />

        <Route path='/admin' element={admin ? <AdminLayout /> : <Navigate to={'/admin/login'} replace={true} />} >
          <Route index element={<AdminDashboardPage />} />
          <Route path='user-management' element={<UserManagement />} />
          <Route path='view-user/:id' element={<ViewUserPage />} />
          <Route path='scrap-management' element={<ScrapManagement />} />
          <Route path='pickups' element={<PickupsPage />} />
          <Route path='pickup-details/:id' element={<PickupDetailsPage />} />
        </Route>
        {/* <Route path='*' element={<PageNotFound/>}/> */}

        <Route path='/admin/payment-success' element={<PaymentSuccess />} />
      </Routes>

    </ThemeProvider>
  )
}

export default App;





