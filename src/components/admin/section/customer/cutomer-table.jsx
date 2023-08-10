import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../../../config/axios';
// import { Scrollbar } from 'src/components/scrollbar';
// import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let [status, setStatus] = useState(false);

  const {
    count,
    items = [],
    onPageChange = () => { },
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    fetchUserData
  } = props;

  const changeUserStatus = (userId, {isBlocked}) => {
    console.log("chagen user stausdlkjdf cajfoio=");
    axios.patch('/admin/change-status?id=' + userId)
      .then((response) => {
        status = !status
        setStatus(status);
        if(isBlocked === true){
          toast.error('Customer Blocked');
          fetchUserData();
        } else {
          toast.success('Customer Unblocked');
          fetchUserData();
        }
        
        
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        toast.error("Couldn't block customer");
      })
  }


  return (
    <Card>
      {/* <Scrollbar> */}
      <Box sx={{ minWidth: 800 }} pl={3}>
      <Toaster />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                No.
              </TableCell>
              <TableCell>

              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Phone No
              </TableCell>
              <TableCell>
                Wallet
              </TableCell>
              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((customer, index) => {

              return (
                <TableRow
                  hover
                  key={customer.id}
                >
                  <TableCell padding="checkbox">
                    {index+1}
                  </TableCell>
                  <TableCell padding="checkbox">
                    <Avatar alt={customer.username} src="/static/images/avatar/2.jpg" />
                  </TableCell>
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                    >

                      <Typography variant="subtitle2">
                        {customer.username}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {customer.phoneNo}
                  </TableCell>
                  <TableCell>
                  &#8377;{customer.wallet}
                  </TableCell>
                  <TableCell>
                    {(customer.status === false) ?
                      <Button variant='contained' color='success' onClick={() => changeUserStatus(customer._id, {isBlocked: false})} >Unblock </Button> :
                      <Button variant={'contained'} color={'error'} onClick={() => changeUserStatus(customer._id, {isBlocked: true})}>Block</Button>}

                  </TableCell>
                  <TableCell>
                    <Button variant={'outlined'} color='primary'><NavLink to={`/admin/view-user/${customer._id}`} className={'nav-link'}>View</NavLink></Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
