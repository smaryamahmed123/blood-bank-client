
import React from 'react';
import { Box, Container, CssBaseline, Typography, Grid, Paper, Button } from '@mui/material';
import Navbar from '../../component/Navbar';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
    },
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const Profile = () => {
    const location = useLocation();
    const storedData = localStorage.getItem("data");
    const data = storedData ? JSON.parse(storedData) : null;
    const user = data ? data.user : null;

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: 8, marginBottom: 5 }}>
                <ThemeProvider theme={darkTheme}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={10} md={8} lg={6}>
                            <Item elevation={3}>
                                <Typography variant="h4" gutterBottom>
                                    Hello {user ? `${user.firstName} ${user.lastName}` : "Guest"}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 4 }}>
                                    Welcome to your profile page! Here, you can view and update your personal information.
                                </Typography>
                                {user ? (
                                    <>
                                        <Typography variant="h6" gutterBottom>First Name: {user.firstName}</Typography>
                                        <Typography variant="h6" gutterBottom>Last Name: {user.lastName}</Typography>
                                        <Typography variant="body1" gutterBottom>Phone Number: {user.phoneNo}</Typography>
                                        <Typography variant="body1" gutterBottom>Email: {user.email}</Typography>
                                        <Typography variant="body1" gutterBottom>
                                            Address: 123 Main Street, City, Country
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                            <Button variant="outlined" component={Link} to="/logout">
                                                Logout
                                            </Button>
                                        </Box>
                                    </>
                                ) : (
                                    <Typography variant="body1">
                                        Please <Link to="/login">sign in</Link> to see your profile details.
                                    </Typography>
                                )}
                            </Item>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Container>
            <Footer />
        </>
    );
};

export default Profile;
