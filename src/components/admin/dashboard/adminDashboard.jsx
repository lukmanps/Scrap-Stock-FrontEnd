import React, { useEffect, useState } from 'react'
import {
  Typography,
  Box,
  Container,
  Grid,
  ThemeProvider,

  Stack
} from '@mui/material';
import { OverviewTasksProgress } from '../section/dashboard/pickup-stats';
import { OverviewTotalCustomers } from '../section/dashboard/customer-stats';
import { OverviewTotalProfit } from '../section/dashboard/payment-stats';
import AdminTheme from '../../../Theme/AdminTheme';
import BasicBars from '../section/dashboard/sales-stats';
import axios from '../../../config/axios'

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    axios.get('/admin/get-dashboard-info')
      .then((response) => {
        console.log(response?.data);
        setDashboard(response?.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <ThemeProvider theme={AdminTheme}>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4
        }}>
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant='h3' color={'primary'} fontWeight={600}>DashBoard</Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
              </Stack>
            </Stack>

          </Stack>

          <Grid container>
            <Grid
              xs={12}
              sm={6}
              lg={4}
            >
              <OverviewTasksProgress
                sx={{ height: '100%' }}
                value={dashboard.pickupCount}
              />
            </Grid>

            <Grid
              xs={12}
              sm={6}
              lg={4}
            >
              <OverviewTotalCustomers
                difference={16}
                positive={true}
                sx={{ height: '100%' }}
                value={dashboard.customerCount}
              />
            </Grid>

            <Grid
              xs={12}
              sm={6}
              lg={4}
            >
              <OverviewTotalProfit
                sx={{ height: '100%' }}
                value="$15k"
              />
            </Grid>

            <Grid
              xs={12}
              lg={8}
            >
              <BasicBars />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default AdminDashboard;