import React from 'react';
import { useCallback, useMemo, useState } from 'react';
// import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
// import { useSelection } from 'src/hooks/use-selection';
// import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from '../section/customer/cutomer-table';
import CustomersSearch from '../section/customer/customer-search';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AdminTheme from '../../../Theme/AdminTheme';
import axios, { setAccessToken } from '../../../config/axios';
import LoadingScreen from '../../../Common/Loading-screen';
// import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();

// const useCustomers = (page, rowsPerPage) => {
//     return useMemo(
//         () => {
//             return applyPagination(data, page, rowsPerPage);
//         },
//         [page, rowsPerPage]
//     );
// };

// const useCustomerIds = (customers) => {
//   return useMemo(
//     () => {
//       return customers.map((customer) => customer.id);
//     },
//     [customers]
//   );
// };

const CustomerManagement = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUser] = React.useState([]);
  let [status, setStatus] = React.useState('');
  const [search, setSearch] = useState('')
  let [remove, setRemove] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log(users, 'Userss');

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  const handleSearchCustomer = (value) => {
    setSearch(value)
  }

  const handleCustomerStatus = (status) => {
    setStatus(status);
  }

  const fetchUserData=()=>{
    if(isLoading){
      axios.get('/admin/user-management')
    .then((response) => {
      setUser(response?.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err, " :Axios Error");
    })
    }
    
  }

  React.useEffect(() => {
    setAccessToken('admin');
    fetchUserData()
  }, []);

  let filterCustomer = []

  if(search !== ''){
    filterCustomer = users.filter(item => item.username.toLowerCase().includes(search.toLowerCase()))
  } else {
    filterCustomer = users;
  }

  // if(isLoading){
  //   return <LoadingScreen />
  // }

  return (
    <ThemeProvider theme={AdminTheme}>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container >
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4" fontWeight={500}>
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  
                 
                </Stack>
              </Stack>
              
            </Stack>
            <CustomersSearch setSearch={handleSearchCustomer} search={search}/>
            {(isLoading) && 
              <LoadingScreen />
            }

            <CustomersTable
              items={filterCustomer}
              fetchUserData={fetchUserData}
            />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>

  )
}

export default CustomerManagement;