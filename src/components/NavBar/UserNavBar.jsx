import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider } from '@emotion/react';
import GlobalTheme from '../../Theme/GlobalTheme';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CommonButton } from '../../Common/CommonButton';

import { useNavigate } from 'react-router-dom';

const pages = ['Check Price List', 'Register'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function UserNavBar({button}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = useSelector((state) => state.userInfo);
  console.log(user, ': USER INFO in navbar');

  

  return (
    <AppBar position="fixed" color="bg"> 
      <Container maxWidth="xl">
        <Toolbar>

          {/* LOGO */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'poppins',
              fontWeight: 600,
              letterSpacing: '0',
              color: '#018A44',
              textDecoration: 'none',
            }}
          >
            Scrap Stock
          </Typography>

          {/* HAMBURGER IN SMALL SCREEN */}
          <Box sx={{ flexGrow:1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'poppins',
              fontWeight: 600,
              letterSpacing: '0',
              color: '#018A44',
              textDecoration: 'none',
            }}
          >
            Scrap Stock
          </Typography>

          <Box sx={{ marginLeft: 'auto', display: {xs: 'none', md: 'flex'}}}>
              <CommonButton variant='outlined' color='secondary'>
                Check Price List
                </CommonButton>
          </Box>

          <Box sx={{ display: {xs: 'flex', xl: 'flex'} }}>
          <CommonButton variant="contained" sx={{marginLeft: '10px'}}>{button}</CommonButton>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
   
  );
}
export default UserNavBar;
