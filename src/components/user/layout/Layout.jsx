import React from 'react';
import UserNavBar from './user-navbar';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const Layout = () => {
  return (
    <Container maxWidth='xl'>

      <Grid container>
        <Grid item sx={{marginBottom: '3rem'}}>
          <UserNavBar button={'Login'} link={'login'}/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>

    </Container>
  )
}

export default Layout