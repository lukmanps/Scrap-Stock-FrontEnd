import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material';
import GlobalTheme from '../../Theme/GlobalTheme';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {logout} from '../../Redux/admin/AdminInfoReducer';

const drawerWidth = 240;

const AdminAppbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('adminInfo');
        dispatch(logout());
        navigate('/admin/login');
    }
    return (
        <div><AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography>
                <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
                    <Button variant='contained' color='secondary' onClick={handleLogout}>Logout</Button>
                </Box>
            </Toolbar>


        </AppBar></div>
    )
}

export default AdminAppbar;