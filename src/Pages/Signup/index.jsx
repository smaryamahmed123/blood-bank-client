import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from '../../utis/Toost';
// import Navbar from '../../component/Navbar';
import { BASE_URL1 } from '../../Constant';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Logo from '../../../public/logo.jpg'

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const FormBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  width: '100%',
  '& .MuiTextField-root': {
    marginBottom: theme.spacing(2),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [firstName, setfirstname] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const nevigate = useNavigate()
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log({email, password, firstName, lastName});

      const obj = {
        email,
        password,
        firstName,
        lastName,
      };
      const response = await axios.post(`${BASE_URL1}/registration`, obj);
      console.log("response", response);
      if (response.data.status = 200) {
        Toast(response.data.message, "success");
      } else {
        Toast(response.data.message, "error");
      }
      nevigate("/profile")
    } catch (error) {
      Toast(error.message, "error");
    }

  };
  //`${BASE_URL}/signup`
  return (
   
    <>
      <StyledContainer component="main" maxWidth="xs">
        <Navbar />
        <Box sx={{ mb: 4 }}>
          {/* <StyledAvatar>
        <LockOutlinedIcon />
        <img src={Logo} alt="Logo" />
      </StyledAvatar> */}
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
            Sign up
          </Typography>
        </Box>
        <FormBox component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign Up
          </StyledButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography variant="body2">
                Already have an account?{' '}
                <StyledLink to="/login">
                  Sign in
                </StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </FormBox>
      </StyledContainer>
      <Footer />
    </>
  );
}