import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
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
import GlobalTheme from '../../../Theme/GlobalTheme';
import { NavLink } from 'react-router-dom';



const drawerWidth = 240;

const AdminSidebar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Typography variant='h6' mt={3} color={'#018A44'} fontWeight={500} mb={3}>Admin Panel</Typography>
            {/* <Toolbar /> */}
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon> <InboxIcon /></ListItemIcon>
                        <ListItemText><NavLink className={'nav-link'} to={'/admin'}>Dashboard</NavLink></ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon /></ListItemIcon>
                        <ListItemText><NavLink className={'nav-link'} to={'/admin/user-management'}> Customer Management </NavLink></ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon> <InboxIcon /></ListItemIcon>
                        <ListItemText><NavLink className={'nav-link'} to={'/admin/scrap-management'}>Scrap Material</NavLink></ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon> <InboxIcon /></ListItemIcon>
                        <ListItemText><NavLink className={'nav-link'} to={'/admin/pickups'}>Scrap Pickups</NavLink></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    )
}

export default AdminSidebar;