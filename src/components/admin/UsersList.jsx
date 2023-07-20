import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Grid, Box } from '@mui/material';
import { Button, Typography } from '@mui/material';
import axios from '../../config/axios';
import { CommonButton } from '../../Common/CommonButton';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import GlobalTheme from '../../Theme/GlobalTheme';
import BasicPagination from '../../Common/Pagenation';
import { NavLink } from 'react-router-dom';




function UsersList() {

    const [users, setUser] = React.useState([]);
    let [status, setStatus] = React.useState(false);
    let [remove, setRemove] = React.useState(false);

    console.log(users, 'Userss');

    React.useEffect(() => {
        axios.get('/admin/user-management')
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                console.log(err, " :Axios Error");
            })
    }, []);

    console.log(users);

    const changeUserStatus = (userId) => {
        axios.patch('/admin/change-status?id=' + userId)
            .then((response) => {
                status = !status
                setStatus(status);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    const viewUser = (userId) => {
        axios.get('/admin/view-user?id=' + userId)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err, " : Axios ERROR");
            })
    }

    const deleteUser = (userId) => {
        axios.delete('/admin/delete-user?id=' + userId)
            .then((response) => {
                console.log(response.data);
                remove = !remove
                setRemove(remove);

            })
            .catch((err) => {
                console.log(err, " : AXIOS ERROR");
            })
    }

    return (
        <ThemeProvider theme={GlobalTheme}>
            <Box alignContent={'start'}></Box>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Username</TableCell>
                                        <TableCell align="left">Phone Number</TableCell>
                                        <TableCell align="left">Email</TableCell>
                                        <TableCell align="left">Wallet</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow
                                            key={user.username}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {user.username}
                                            </TableCell>
                                            <TableCell align="left">{user.phoneNo}</TableCell>
                                            <TableCell align="left">{user.email}</TableCell>
                                            <TableCell align="left">{user.wallet}</TableCell>
                                            <TableCell align="left">
                                                {(user.status === false) ?
                                                    <Button variant='contained' color='success' onClick={() => changeUserStatus(user._id)} >Unblock </Button> :
                                                    <Button variant={'contained'} color={'error'} onClick={() => changeUserStatus(user._id)}>Block</Button>}
                                            </TableCell>
                                            <TableCell align="left">
                                                <Button variant={'contained'} color='primary'><NavLink to={`/admin/view-user/${user._id}`} className={'nav-link'}>View</NavLink></Button>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Button variant={'contained'} color='error' onClick={() => deleteUser(user._id)}>Delete</Button>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

        </ThemeProvider>
    );
}

export default UsersList;