import React from 'react';
import { Outlet } from "react-router-dom";
import AdminSidebar from './AdminSidebar';
import AdminAppbar from './AdminAppbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Container, Grid } from '@mui/material';


const drawerWidth = 240;

const Layout = () => {
  return (
    <Container sx={{display: 'flex'}} maxWidth='xl'>
      <Grid container >
        <Grid item>
        <CssBaseline />
        <AdminAppbar />
        </Grid>

        <Grid item>
        <AdminSidebar />
        </Grid>

        <Grid item>
       
          <Toolbar />
          {/* --------- Pages Render Here --------- */}
          <Outlet />
        </Grid>
      </Grid>

    </Container>
        

  
    
  )
}

export default Layout



