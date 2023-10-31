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
import formatDate from '../../../Common/date-format';

const columns = ['No', 'Date', 'Time Slot', 'Pickup Date', 'Amount', 'Status'];

const RecentPickup = () => {
  const [pickup, setPickup] = useState([]);
  const [page, pageChange] = useState(0);
  const [rowsPerPage, rowsPerPageChange] = useState(3);


  const user = useSelector((state) => state.userInfo);

  console.log(user, " user details");

  const handlePageChange = (event, newPage) => {
    pageChange(newPage)
  }

  const handleRowsPerPage = (event) => {
    rowsPerPageChange(+event.target.value);
    pageChange(0)
  }

  async function getPickups() {
    const pickups = await getRecentPickups(user._id);
    setPickup(pickups);
  }

  useEffect(() => {
    getPickups()
  }, []);


  return (
    <ThemeProvider theme={GlobalTheme}>

      <Container sx={{justifyContent: 'center'}}>

        <Grid container justifyContent={'center'}>
          <Grid item sm={12} lg={4}>
            <Card >
              <CardContent >
                <Grid container spacing={1}>
                  <Grid item>
                    <WalletIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1' fontWeight={500}>Wallet</Typography>
                  </Grid>
                </Grid>
                <Typography variant='h4' color={'primary'} fontWeight={500}>&#8377; {user.wallet}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container  justifyContent={'center'}>
            <Grid item mt={5}>
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
                              <TableCell align='left' key={index}>
                                {index + 1}
                              </TableCell>
                              <TableCell align='left' key={index}>
                                {formatDate(pickup.date)}
                              </TableCell>
                              <TableCell align='left' key={index}>
                                {pickup.timeSlot.time}
                              </TableCell>
                              <TableCell align='left' key={index}>
                                {pickup.timeSlot.date}
                              </TableCell>
                              <TableCell align='left' key={index}>
                                &#8377; {pickup.totalAmount}
                              </TableCell>
                              <TableCell align='left' key={index}>
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