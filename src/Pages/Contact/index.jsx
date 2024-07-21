
import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import { Box, Button, Container, CssBaseline, styled, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import contactUsImg from '../../assets/contactImg.avif'; // Import your image here
import { BASE_URL2 } from '../../Constant';
import axios from 'axios';
import { Toast } from '../../utis/Toost';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer';
import { Link as RouterLink } from 'react-router-dom';

const Containers = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f0f0f0',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: 'center',
  maxWidth: '400px',
  margin: 'auto',
  marginTop: theme.spacing(8),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'block',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));


function Contacte() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  // Get data from local storage and parse it
  const data = JSON.parse(localStorage.getItem("data"));

  // Add a check to see if data and data.user are defined
  const user = data && data.user;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // If user is not defined, stop execution
      if (!user) {
        alert("User data is missing, please log in again.");
        return;
      }

      const obj = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNo,
        message,
      };

      const response = await axios.post(`${BASE_URL2}/contact`, obj);

      if (response.status === 200) {
        // If the response status is 200, check response data
        if (response.data.status) {
          Toast(response.data.message, "success");
        } else {
          Toast(response.data.message, "error");
        }
      } else {
        // Handle other status codes appropriately
        Toast(`Error: ${response.status} - ${response.statusText}`, "error");
      }
    } catch (error) {
      // Handle any exceptions
      Toast(error.message, "error");
    }
  };

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: '100px', marginBottom: 5 }}>
        <Box>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Typography variant='h3' sx={{ fontFamily: 'fantasy', fontWeight: 'inherit', color: 'black' }} gutterBottom>
                Hello {user ? `${user.firstName} ${user.lastName}` : "Guest"}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                We'd love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Address:</strong>  1234 Street Name, City, State, ZIP
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Phone:</strong> +1 (123) 456-7890
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                <strong>Email:</strong> bloodbank@gmai.com
              </Typography>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  If you have any specific inquiries, visit our contact page.
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  sx={{ marginTop: 2 }}
                >
                  Go to Contact Page
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Box>
        <Box sx={{ position: "relative", marginTop: "100px" }}>
          <Box>
            <Grid
              container
              direction={{ xs: "column", md: "row" }} // Switch to column direction on mobile
              spacing={2}
            >
              {/* Image section */}
              <Grid
                item
                xs={12} // Full width on mobile devices
                md={6} // Half width on larger screens
              >
                <Typography variant="h3">
                  Contact Us Image
                </Typography>
                <img src={contactUsImg} alt="Contact Us" style={{ width: "100%" }} />
              </Grid>
              {/* Form section */}
              <Grid
                item
                xs={12} // Full width on mobile devices
                md={6} // Half width on larger screens
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    width: "100%", // Ensure the form takes full width
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {/* Only render form fields if user is defined */}
                  {user ? (
                    <>
                      <TextField
                        fullWidth
                        label="First Name"
                        value={user.firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Last Name"
                        value={user.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        value={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Phone No."
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                      >
                        Submit
                      </Button>
                    </>
                  ) : (
                    <>
                      <Containers>
                        <Typography variant="h3" component="h1">
                          Please sign in
                        </Typography>
                        <StyledLink component={RouterLink} to="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </StyledLink>
                      </Containers>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Contacte;


