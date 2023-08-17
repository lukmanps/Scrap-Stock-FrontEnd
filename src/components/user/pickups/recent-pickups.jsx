import React, { useEffect, useState } from 'react';
import {
  Container,
  ThemeProvider,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import GlobalTheme from '../../../Theme/GlobalTheme';
import getRecentPickups from '../../../APIs/user/getRecentPickups';
import { useSelector } from 'react-redux';

const columns = ['No', 'Date', 'Time Slot', 'Pickup Date', 'Amount', 'Status'];

const RecentPickup = () => {
  const [pickup, setPickup] = useState([]);
  const [page, pageChange] = useState(0);
  const [rowsPerPage, rowsPerPageChange] = useState(3);
  const user = useSelector((state) => state.userInfo);

  const handlePageChange = (event, newPage) => {
    pageChange(newPage)
  }

  const handleRowsPerPage = (event) => {
    rowsPerPageChange(+event.target.value);
    pageChange(0)
  }

  async function getPickups() {
    const pickups = await getRecentPickups(user.id);
    setPickup(pickups);
  }

  useEffect(() => {
    getPickups()
  }, []);

  console.log(pickup);

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Container maxWidth='xl' sx={{ mt: 5 }}>

        <Grid container sm={12} lg={8}>
          <Card sx={{ width: '15rem' }}>
            <CardContent sx={{ justifyContent: 'center' }}>
              <Grid container spacing={1}>
                <Grid item>
                  <WalletIcon />
                </Grid>
                <Grid item>
                  <Typography variant='body1' fontWeight={500}>Wallet</Typography>
                </Grid>
              </Grid>
              <Typography variant='h4' color={'primary'} fontWeight={500}>&#8377; 94</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid container>
          <Grid item sm={12} md={12} mt={5} >
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column} align='left'>
                          {column}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pickup
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((pickup, index) => { // Added 'index' parameter to map function
                        return (
                          <TableRow key={pickup._id} hover role="checkbox" tabIndex={-1}>
                            <TableCell align='left'>
                              {index + 1}
                            </TableCell>
                            <TableCell align='left'>
                              {pickup.date}
                            </TableCell>
                            <TableCell align='left'>
                              {pickup.timeSlot.time}
                            </TableCell>
                            <TableCell align='left'>
                              {pickup.timeSlot.date}
                            </TableCell>
                            <TableCell align='left'>
                              &#8377; {pickup.totalAmount}
                            </TableCell>
                            <TableCell align='left'>
                              {pickup.status}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>

              <TablePagination
                component='div'
                rowsPerPageOptions={[3, 5, 7]}
                rowsPerPage={rowsPerPage}
                page={page}
                count={pickup.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPage}>
              </TablePagination>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default RecentPickup



{/* Uncomment and update props based on your data source (rows) to enable pagination */ }
{/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={pickups.length} // Update to the total count of pickups
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}