import * as React from 'react';
import {Paper, Box, Button, ThemeProvider, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AdminTheme from '../../../Theme/AdminTheme';
import getPickupList from '../../../APIs/admin/getPickupsList';

import { Link, NavLink, useNavigate } from 'react-router-dom';

const columns = ['No', 'Date', 'Name', 'Location', 'status'];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function Pickups() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const [pickups, setPickups] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDetails = (id) => {
    console.log(id, "ID in handleDetails");
  };

  React.useEffect(() => {
    getPickupList()
      .then((response) => {
        console.log(response, ' :: Pickup List');
        setPickups(response);
      });
  }, []);

  return (
    <ThemeProvider theme={AdminTheme}>
      <Box mt={8} mb={4}>
        <Typography variant='h4' fontWeight={500}>Scrap Pickups</Typography>
      </Box>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
                        {pickup.date} {/* Hardcoded date, consider using 'pickup.date' */}
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
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={pickups.length} // Update to the total count of pickups
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </ThemeProvider>
  );
}