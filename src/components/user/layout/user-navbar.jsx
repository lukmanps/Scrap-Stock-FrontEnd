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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import GlobalTheme from '../../../Theme/GlobalTheme';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CommonButton } from '../../../Common/CommonButton';

import handleLogout from '../../../APIs/user/logoutUtils';

import { useNavigate } from 'react-router-dom';

const pages = ['Check Price List', 'Register'];



function UserNavBar({ button, link }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const doLogout = handleLogout();
  const handleLogoutClick = () => {
    doLogout();
    navigate('/');
  }

  const user = useSelector((state) => state.userInfo);

  const handleLoginButton = (button) => {
    console.log('clicked', button)
    if (button === 'register') {
      navigate('/signup');
    } else {
      navigate('/login');
    }
  }

  const handleCheckPricePage = () => {
    navigate('/check-price-list')
  }

  const handlePickupsPage = () => {
    navigate('/recent-pickups')
  }

  return (
    <AppBar position="fixed" color="bg" sx={{ marginBottom: '5rem' }}>
      <Container maxWidth="xl" >
        <Toolbar>

          {/* LOGO */}
          <Typography
            variant="h5"
            noWrap
            component="a"
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
            <NavLink to={'/'} className={'nav-link'}>Scrap Stock</NavLink>

          </Typography>

          {/* HAMBURGER IN SMALL SCREEN */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

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

          <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
            <CommonButton variant='outlined' color='secondary' onClick={handleCheckPricePage}>
              Check Price List
            </CommonButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', xl: 'flex' } }}>

            {user ? <Box ml={3}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.username} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Box>
                <Menu
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
                  sx={{ mt: '45px', width:'25rem', p:'50px'}}
                >
                  <MenuItem>
                    <Typography variant='body2' fontWeight={500}>Hello {user.username},</Typography>
                  </MenuItem>
                  {/* <Divider />
                  <MenuItem sx={{py:0}}>
                    <Typography variant='body2'>Profile</Typography>
                  </MenuItem> */}
                  <Divider />
                  <MenuItem sx={{py:0}} onClick={handlePickupsPage}>
                    <Typography variant='body2'>Pickups</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogoutClick} sx={{py:0}}>
                  <Typography textAlign="center" color={'error'}> Logout </Typography> 
                  {/* <LogoutIcon color='error'/> */}
                  </MenuItem>
                </Menu>
              </Box>

            </Box> : <CommonButton variant="contained" sx={{ marginLeft: '10px' }}><NavLink to={`/${link}`} className={'nav-link'}>{button}</NavLink></CommonButton>}

            {/*  */}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default UserNavBar;
