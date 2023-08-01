import React from 'react'
import {
  Grid,
  Container
} from '@mui/material';
import CheckPriceList from '../../components/user/home/check-price-list';
import UserNavBar from '../../components/user/layout/user-navbar';

const CheckPriceListPage = () => {
  return (
    <div id='user-body'>
      <Container>
        <Grid container>
          <Grid item sx={{ marginBottom: '3rem' }}>
            <UserNavBar button={'Login'} link={'login'}/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{ marginBottom: '3rem' }}>
          <CheckPriceList />
          </Grid>
        </Grid>
        

      </Container>
    </div>
  )
}

export default CheckPriceListPage;