import React from 'react';
import RecentPickup from '../../components/user/pickups/recent-pickups';
import UserNavBar from '../../components/user/layout/user-navbar';
import { Container, Grid } from '@mui/material';

const RecentPickupsPage = () => {
  return (
    <div id='user-body'>
      <Container>
        <Grid container>
          <Grid item>
            <UserNavBar />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
          <RecentPickup />
          </Grid>
        </Grid>

      </Container>

      
    </div>
  )
}

export default RecentPickupsPage