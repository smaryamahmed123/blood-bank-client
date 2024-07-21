import React, { useEffect, useState } from 'react';
import { Typography, Container, Grid, Button, Card, CardContent, CardMedia, Box, Paper, styled } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import blood5 from '../../assets/blood5.jpg'
import { Link } from 'react-router-dom';
import CustomButton from '../../component/Button';
import FeaturedItemsSection from '../BloodDonationCamps';
import BloodDonationEvents from '../../assets/BloodDonationEvents.png'
import Aboutus from '../../assets/aboutus.jpeg'
import { BASE_URL4 } from '../../Constant';
import axios from 'axios';



const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: theme.spacing(2),
}));



const Home = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Show only 8 testimonials initially
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 8);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${BASE_URL4}/user`);
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginTop: '100px', textAlign: 'center', color: 'black', marginBottom: 4 }}>
          Welcome to Our Website
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            my: 4,
            backgroundImage: `url(${blood5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            p: 4,
            borderRadius: 2
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Save Lives, Donate Blood
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Join our mission to save lives by donating blood.
          </Typography>
          <Button variant="contained" color="primary" size="large">Get Involved</Button>
        </Box>

        {/* About Us Preview */}
        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={Aboutus}
                alt="About Us"
              />
              <Typography variant="h4" gutterBottom>About Us</Typography>
              <Typography variant="body1">
                We are dedicated to providing safe and sufficient blood supplies to those in need. Learn more about our mission and values.
              </Typography>
              <Button variant="outlined" color="primary" component={Link}
                to="/aboutus" sx={{ mt: 2 }}>Learn More</Button>
            </Paper>
          </Grid>

          {/* Services Overview */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={BloodDonationEvents}
                alt="Our Services"
              />
              <Typography variant="h4" gutterBottom>Our Services</Typography>
              <Typography variant="body1">
                We offer a range of services including blood donation drives, blood testing, and storage facilities. Discover how we can help you.
              </Typography>
              <Button variant="outlined" color="primary" component={Link}
                to="/services" sx={{ mt: 2 }}>View Services</Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" gutterBottom>Ready to Make a Difference?</Typography>
          <Button variant="contained" color="secondary" size="large" component={Link}
            to="/register">Donate Now</Button>
        </Box>

        {/* Testimonials */}
        <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>What People Are Saying</Typography>
      <Grid container spacing={4} sx={{ my: 2 }}>
        {displayedTestimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial._id}>
            <Card>
              <CardMedia
                component="img"
                alt={testimonial.name}
                height="140"
                image={testimonial.img}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.message}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {testimonials.length > 8 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={handleShowMore}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </Box>
      )}
    </Box>

        {/* Contact Us */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          <Grid item xs={12}>
            <StyledPaper elevation={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                We'd love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                <strong>Address:</strong> 1234 Street Name, City, State, ZIP
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                <strong>Phone:</strong> +1 (123) 456-7890
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                <strong>Email:</strong> bloodbank@gmai.com
              </Typography>
              <CustomButton
                variant="contained"
                component={Link}
                to="/contact"
                sx={{ marginTop: 2 }}
                text="See more"
              />
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />

    </>
  );
};

export default Home;









