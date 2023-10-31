import React, { useEffect, useState } from 'react';
// import './App.css';
import './components/user/layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GlobalTheme from './Theme/GlobalTheme';

//Layouts
const AdminLayout = React.lazy(() => import('./components/admin/layout/Layout'));
const UserLayout = React.lazy(() => import('./components/user/layout/Layout'));
import PageNotFound from './pages/page-not-found';


//User Pages
const UserSignUp = React.lazy(() => import('./pages/user/user-signup-page'));
const UserLogin = React.lazy(() => import('./pages/user/user-login-page'));
const Home = React.lazy(() => import('./pages/user/home-page'));
const SellScrapPage = React.lazy(() => import('./pages/user/sell-scrap-page'));
const CheckPriceListPage = React.lazy(() => import('./pages/user/check-price-page'));
const RecentPickupsPage = React.lazy(() => import('./pages/user/recent-pickup-page'));

const ProfilePage = React.lazy(() => import('./pages/user/profile-page'));
import ErrorBoundary from './pages/user/useErrorBoundary';
import PickupSuccess from './components/user/pickups/pickup-success-page';

//Admin Pages
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLoginPage'));
const UserManagement = React.lazy(() => import('./pages/admin/UserManagement'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboardPage'));
const ViewUserPage = React.lazy(() => import('./pages/admin/ViewUserPage'));
const AdminDashboardPage = React.lazy(() => import('./pages/admin/AdminDashboardPage'))
const ScrapManagement = React.lazy(() => import('./pages/admin/ScrapManagementPage'))
const PickupDetailsPage = React.lazy(() => import('./pages/admin/PickupDetailsPage'))
const PaymentSuccess = React.lazy(() => import('./Common/payment-success'))
const PickupsPage = React.lazy(() => import('./pages/admin/pickupsPage'))

//Redux State
import { isAdmin } from './Redux/admin/AdminInfoReducer';
import { addUserInfo } from './Redux/user/UserInfoReducer';
import { isUser } from './Redux/user/AuthReducer';
import handleLogout from './APIs/user/logoutUtils';
import LoadingScreen from './Common/Loading-screen';


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.authUser);
  const userData = useSelector((state) => state.userInfo);
  const admin = useSelector((state) => state.adminInfo);

  const [isLoading, setIsLoading] = useState(true);

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

          <Route path='/login' element={user ? <Navigate to={'/'} replace={true} /> : <React.Suspense fallback={<LoadingScreen />}> <UserLogin /> </React.Suspense>} />
          <Route path='/signup' element={user ? <Navigate to={'/'} replace={true} /> : <React.Suspense fallback={<LoadingScreen />}> <UserSignUp /> </React.Suspense>} />
          <Route path='/' element={ <React.Suspense fallback={<LoadingScreen />}> <Home /> </React.Suspense>} />
          <Route path='/check-price-list' element={<React.Suspense fallback={<LoadingScreen />}> <CheckPriceListPage /> </React.Suspense> } />

          <Route path='/' element={user ? <React.Suspense fallback={<LoadingScreen />}> <UserLayout /> </React.Suspense> : <Navigate to={'/login'} replace={true} />}>
            <Route path='sell-scrap' element={ <React.Suspense fallback={<LoadingScreen />}> <SellScrapPage /> </React.Suspense> } />
            <Route path='recent-pickups' element={<React.Suspense fallback={<LoadingScreen />}> <RecentPickupsPage /> </React.Suspense>} />
            <Route path='scheduled-pickup' element={<React.Suspense fallback={<LoadingScreen />}> <PickupSuccess /> </React.Suspense>} />
            <Route path='profile' element={<React.Suspense fallback={<LoadingScreen />}> <ProfilePage /> </React.Suspense>} />
            <Route path='*' element={<PageNotFound />} />
          </Route>


          {/* :::::::::::::::::::::::::::::::::::::::::::::::: - Admin Side - ::::::::::::::::::::::::::::::::::::::::::::::::::: */}

          <Route path='/admin/login' element={admin ? <Navigate to={'/admin'} replace={true} /> : <React.Suspense fallback={<LoadingScreen />}> <AdminLogin /> </React.Suspense>} />

          <Route path='/admin' element={admin ? <AdminLayout /> : <Navigate to={'/admin/login'} replace={true} />} >
            <Route index element={<React.Suspense fallback={<LoadingScreen />}> <AdminDashboardPage /> </React.Suspense>} />
            <Route path='user-management' element={<React.Suspense fallback={<LoadingScreen />}> <UserManagement /> </React.Suspense>} />
            <Route path='view-user/:id' element={<React.Suspense fallback={<LoadingScreen />}> <ViewUserPage /> </React.Suspense>} />
            <Route path='scrap-management' element={<React.Suspense fallback={<LoadingScreen />}> <ScrapManagement /> </React.Suspense>} />
            <Route path='pickups' element={<React.Suspense fallback={<LoadingScreen />}> <PickupsPage /> </React.Suspense>} />
            <Route path='pickup-details/:id' element={<React.Suspense fallback={<LoadingScreen />}> <PickupDetailsPage /> </React.Suspense>} />
            <Route path='*' element={<PageNotFound />} />
          </Route>


          <Route path='/admin/payment-success' element={<React.Suspense fallback={<LoadingScreen />}> <PaymentSuccess /> </React.Suspense>} />
        </Routes>

      </ErrorBoundary>

    </ThemeProvider>
  )
}

export default App;





