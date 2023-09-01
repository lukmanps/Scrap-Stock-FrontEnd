import React, { useEffect, useState } from 'react';
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
import PageNotFound from './pages/page-not-found';


//User Pages
import UserSignUp from './pages/user/user-signup-page';
import UserLogin from './pages/user/user-login-page';
import Home from './pages/user/home-page';
import SellScrapPage from './pages/user/sell-scrap-page';
import CheckPriceListPage from './pages/user/check-price-page';
import RecentPickupsPage from './pages/user/recent-pickup-page';
import ErrorBoundary from './pages/user/useErrorBoundary';
import PickupSuccess from './components/user/pickups/pickup-success-page';

//Admin Pages
import AdminLogin from './pages/admin/AdminLoginPage';
import UserManagement from './pages/admin/UserManagement';
import AdminDashboard from './pages/admin/AdminDashboardPage';
import ViewUserPage from './pages/admin/ViewUserPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ScrapManagement from './pages/admin/ScrapManagementPage';
import PickupDetailsPage from './pages/admin/PickupDetailsPage';
import PaymentSuccess from './Common/payment-success';
import PickupsPage from './pages/admin/pickupsPage';

//Redux State
import { isAdmin } from './Redux/admin/AdminInfoReducer';
import { addUserInfo } from './Redux/user/UserInfoReducer';
import { isUser } from './Redux/user/AuthReducer';
import handleLogout from './APIs/user/logoutUtils';
import LoadingScreen from './Common/Loading-screen';
import ProfilePage from './pages/user/profile-page';


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.authUser);
  const userData = useSelector((state) => state.userInfo);
  const admin = useSelector((state) => state.adminInfo);

  const [isLoading, setIsLoading] = useState(true);
  const doLogout = handleLogout();

  useEffect(() => {
    dispatch(isUser(user));
    dispatch(isAdmin(admin));
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider theme={GlobalTheme}>


      {/* ::::::::::::::::::::::::::::::::::::::::: - User Side - ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <ErrorBoundary>
        <Routes>

          <Route path='/login' element={user ? <Navigate to={'/'} replace={true} /> : <UserLogin />} />
          <Route path='/signup' element={user ? <Navigate to={'/'} replace={true} /> : <UserSignUp />} />

          <Route path='/' element={<Home />} />
          <Route path='/check-price-list' element={<CheckPriceListPage />} />

          <Route path='/' element={user ? <UserLayout /> : <Navigate to={'/login'} replace={true} />}>
            <Route path='/sell-scrap' element={<SellScrapPage />} />
            <Route path='/recent-pickups' element={<RecentPickupsPage />} />
            <Route path='/scheduled-pickup' element={<PickupSuccess />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
          




      {/* :::::::::::::::::::::::::::::::::::::::::::::::: - Admin Side - ::::::::::::::::::::::::::::::::::::::::::::::::::: */}

          <Route path='/admin/login' element={admin ? <Navigate to={'/admin'} replace={true} /> : <AdminLogin />} />

          <Route path='/admin' element={admin ? <AdminLayout /> : <Navigate to={'/admin/login'} replace={true} />} >
            <Route index element={<AdminDashboardPage />} />
            <Route path='user-management' element={<UserManagement />} />
            <Route path='view-user/:id' element={<ViewUserPage />} />
            <Route path='scrap-management' element={<ScrapManagement />} />
            <Route path='pickups' element={<PickupsPage />} />
            <Route path='pickup-details/:id' element={<PickupDetailsPage />} />
            <Route path='*' element={<PageNotFound/>}/>
          </Route>


          <Route path='/admin/payment-success' element={<PaymentSuccess />} />
        </Routes>

      </ErrorBoundary>

    </ThemeProvider>
  )
}

export default App;





