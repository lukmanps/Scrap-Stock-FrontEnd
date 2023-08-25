import React, { useState } from 'react';
import {
  Paper,
  Box,
  Button,
  ThemeProvider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';

import AdminTheme from '../../../Theme/AdminTheme';
import getPickupList from '../../../APIs/admin/getPickupsList';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import LoadingScreen from '../../../Common/Loading-screen';
import formatDate from '../../../Common/date-format';

const columns = ['No', 'Date', 'Name', 'Location', 'status'];




export default function Pickups() {
  const [page, pageChange] = useState(0);
  const [rowsPerPage, rowsPerPageChange] = useState(3);
  const [pickups, setPickups] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handlePageChange = (event, newPage) => {
    pageChange(newPage)
  }

  const handleRowsPerPage = (event) => {
    rowsPerPageChange(+event.target.value);
    pageChange(0)
  }

  React.useEffect(() => {
    if (isLoading) {
      getPickupList()
        .then((response) => {
          console.log(response, ' :: Pickup List');
          setPickups(response);
          setIsLoading(false);
        });
    }

  }, []);

  return (
    <ThemeProvider theme={AdminTheme}>
      <Box mt={8} mb={4}>
        <Typography variant='h4' fontWeight={500}>Scrap Pickups</Typography>
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          {(isLoading) && <LoadingScreen /> } 
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column} align='left' style={{ minWidth: '200px' }}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pickups
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pickup, index) => { // Added 'index' parameter to map function
                  return (
                    <TableRow key={pickup._id} hover role="checkbox" tabIndex={-1}>
                      <TableCell align='left'>
                        {index + 1}
                      </TableCell>
                      <TableCell align='left'>
                        {formatDate(pickup.date)} {/* Hardcoded date, consider using 'pickup.date' */}
                      </TableCell>
                      <TableCell align='left'>
                        {pickup.formData.name}
                      </TableCell>
                      <TableCell align='left'>
                        {pickup.formData.locality}
                      </TableCell>
                      <TableCell align='left'>
                        {pickup.status}
                      </TableCell>
                      <TableCell align='left'>
                        <Button variant='outlined'>
                          <NavLink to={`/admin/pickup-details/${pickup._id}`}>Details</NavLink>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Uncomment and update props based on your data source (rows) to enable pagination */}
        <TablePagination
          component='div'
          rowsPerPageOptions={[3, 5, 7]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={pickups.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPage}>
        </TablePagination>
      </Paper>
    </ThemeProvider>
  );
}