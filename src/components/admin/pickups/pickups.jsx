import * as React from 'react';
import {Paper, Box, Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, Typography } from '@mui/material';
import AdminTheme from '../../../Theme/AdminTheme';
import getPickupList from '../../../APIs/admin/getPickupsList';

const columns = ['No', 'Date', 'Name', 'Location', 'status'];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function Pickups() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [pickups, setPickups] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(()=>{
    getPickupList()
    .then((response) => {
      console.log(response, " : Pickups List in pickups Page");
      setPickups(response);
    })
  }, [])

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
                <TableCell
                  key={column}
                  align='left'
                  style={{ minWidth: '200px' }}
                >
                  {column}
                </TableCell>

              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pickups
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pickup) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                        <TableCell key={pickup.id} align='left'>
                          1
                        </TableCell>
                        <TableCell key={pickup.id} align='left'>
                          27/07/2023
                        </TableCell>
                        <TableCell key={pickup.id} align='left'>
                          {pickup.formData.name}
                        </TableCell>
                        <TableCell key={pickup.id} align='left'>
                         {pickup.formData.locality}
                        </TableCell>
                        <TableCell key={pickup.id} align='left'>
                         {pickup.status}
                        </TableCell>
                        <TableCell key={pickup.id} align='left'>
                         <Button variant='outlined'>Details</Button>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    </ThemeProvider>
  );
}