import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Fade, Menu, MenuItem, Stack } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Logo from '../../public/logo.jpg';

const drawerWidth = 240;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const appBarLinks = [
    { to: '/', label: 'Home' },
    { to: '/contact', label: 'Contact' },
    { to: '/services', label: 'Services' },
    { to: '/aboutus', label: 'About Us' },
    // { to: '/register', label: 'Register' },
    // { to: '/servicespage', label: 'Blood Donation Activities' },
  ];

  const linkStyles = (path) => ({
    textDecoration: 'none',
    color: currentPath === path ? 'ofwhite' : 'black',
    fontWeight: 'inherit',
    fontSize: 20,
    fontFamily: 'fantasy',
    textShadow: currentPath === path ? '0px 0px 2px red' : 'none',
  });



  return (

    <Stack sx={{ display: 'flex' }}>
      <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'red' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Avatar
            src={Logo}
            sx={{
              marginRight: 2,
              objectFit: 'contain',
              width: 50,
              height: 50,
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              ...linkStyles(currentPath),
            }}
          >
            Blood Bank App
          </Typography>
          {!isMobile && (
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', paddingLeft: 5 }}>
              {appBarLinks.map((link) => (
                <Link key={link.to} to={link.to} style={linkStyles(link.to)}>
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Button
                    id="fade-button"
                    aria-controls={opens ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={opens ? 'true' : undefined}
                    onClick={handleClick}
                    style={linkStyles()}
                  >
                    Dashboard
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={opens}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={() => { navigate("/profile") }}>Profile</MenuItem>
                    <MenuItem onClick={() => { navigate("/") }}>My account</MenuItem>
                    <MenuItem onClick={() => { navigate("/logout") }}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Link to="/login" style={linkStyles('/login')}>
                  Login
                </Link>
              )}
              {/* New MenuItems */}
              {isAuthenticated && (
                <>
                  <Link to="/register" style={linkStyles('/register')}>
                    Register
                  </Link>
                  <Link to="/servicespage" style={linkStyles('/servicespage')}>
                    Blood Donation Activities
                  </Link>
                </>
              )}
            </Stack>
          )}
        </Toolbar>
      </MuiAppBar>
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Stack direction="column" spacing={2} sx={{ m: 10 }}>
            {appBarLinks.map((link) => (
              <Link key={link.to} to={link.to} style={linkStyles(link.to)}>
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
                <MenuItem onClick={() => navigate("/")}>My Account</MenuItem>
                <MenuItem onClick={() => navigate("/logout")}>Logout</MenuItem>
              </>
            ) : (
              <Link to="/login" style={linkStyles('/login')}>
                Login
              </Link>
            )}
            {/* New Drawer MenuItems */}
            {isAuthenticated && (
              <>
                <Link to="/register" style={linkStyles('/register')}>
                  Register
                </Link>
                <Link to="/servicespage" style={linkStyles('/servicespage')}>
                  Blood Donation Activities
                </Link>
              </>
            )}
          </Stack>
        </Drawer>
      )}
    </Stack>

  );
};

export default Navbar;
