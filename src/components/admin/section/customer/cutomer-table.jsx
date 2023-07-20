import PropTypes from 'prop-types';
// import { format } from 'date-fns';
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
// import { Scrollbar } from 'src/components/scrollbar';
// import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;


  return (
    <Card>
      {/* <Scrollbar> */}
        <Box sx={{ minWidth: 800 }} pl={3}>
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
              {items.map((customer) => {

                return (
                  <TableRow
                    hover
                    key={customer.id}
                  >
                    <TableCell padding="checkbox">
                    1
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
                      {customer.wallet}
                    </TableCell>
                    <TableCell>
                    {(customer.status === false) ?
                      <Button variant='contained' color='success' onClick={() => changeUserStatus(customer._id)} >Unblock </Button> :
                      <Button variant={'contained'} color={'error'} onClick={() => changeUserStatus(customer._id)}>Block</Button>}
                      
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
