import React from 'react';
import { Outlet } from "react-router-dom";
import AdminSidebar from '../adminSidebar';
import AdminAppbar from '../AdminAppbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const Layout = () => {
  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AdminAppbar />
        <AdminSidebar />

       

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
           {/* --------- Pages Render Here --------- */}
        <Outlet/>
          
          
        </Box>

      </Box>
  )
}

export default Layout