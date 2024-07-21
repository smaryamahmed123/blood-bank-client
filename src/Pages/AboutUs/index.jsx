import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { Box, Button, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import missionImage from '../../assets/OurMission.jpeg'; // Import your mission image
import visionImage from '../../assets/OurVision.jpeg'; // Import your vision image
import valuesImage from '../../assets/OurValues.jpeg'; 
import blood4 from '../../assets/blood4.png'
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://via.placeholder.com/1920x600)', // Replace with a relevant hero image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(8, 0),
  color: '#fff',
  textAlign: 'center',
  borderRadius: theme.spacing(2),
}));

const HeroText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const AboutUs = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      
        <Container sx={{marginTop: '100px'}}>
        <Box
          sx={{
            textAlign: 'center',
            my: 4,
            backgroundImage: `url(${blood4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            p: 4,
            borderRadius: 2
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
          Committed to saving lives by providing safe, reliable, and readily available blood supplies to hospitals and healthcare facilities.
          </Typography>
          {/* <Button variant="contained" color="primary" size="large">Get Involved</Button> */}
        </Box>
          
        </Container>
   
      <StyledContainer>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', marginTop: 4 }}>
          Our Mission, Vision, and Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Section>
              <CardMedia
                component="img"
                height="180"
                image={missionImage}
                alt="Mission"
                sx={{ borderRadius: 2 }}
              />
              <Typography variant="h5" sx={{ marginTop: 2, color: 'primary.main' }}>
                Our Mission
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Our mission is to ensure a steady and safe supply of blood for medical emergencies, surgeries, and other healthcare needs. We strive to educate the public on the importance of blood donation and encourage voluntary donations.
              </Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={4}>
            <Section>
              <CardMedia
                component="img"
                height="180"
                image={visionImage}
                alt="Vision"
                sx={{ borderRadius: 2 }}
              />
              <Typography variant="h5" sx={{ marginTop: 2, color: 'primary.main' }}>
                Our Vision
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                We envision a community where no one suffers due to the lack of available blood for medical needs. By fostering collaboration and compassion, we work towards a future where safe blood is accessible to all.
              </Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={4}>
            <Section>
              <CardMedia
                component="img"
                height="180"
                image={valuesImage}
                alt="Values"
                sx={{ borderRadius: 2 }}
              />
              <Typography variant="h5" sx={{ marginTop: 2, color: 'primary.main' }}>
                Our Values
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                We prioritize compassion, integrity, and excellence in our services. Safety is our utmost priority for both donors and recipients, and we aim to provide the highest quality of care in all that we do.
              </Typography>
            </Section>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 8, marginBottom: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
            How You Can Help
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4, textAlign: 'center' }}>
            Your support is essential! Here are some ways you can get involved:
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Section>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>
                  Donate Blood
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 2 }}>
                  Donating blood is a simple and impactful way to save lives. Join our community of donors to make a difference today.
                </Typography>
                <Button component={Link} to="/register" variant="contained" color="primary">
                  Learn More
                </Button>
              </Section>
            </Grid>

            <Grid item xs={12} md={6}>
              <Section>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>
                  Volunteer
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 2 }}>
                  Volunteering your time and skills helps us achieve our goals. Explore opportunities to support our efforts.
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/contact">
                  Get Involved
                </Button>
              </Section>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', marginTop: 4 }}>
          Our Story and Achievements
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Section>
              <Typography variant="h5" component="h2" gutterBottom>
                Company's Journey
              </Typography>
              <Typography variant="body1" paragraph>
                Since our inception, our goal has been to revolutionize the way blood donations are made by creating an innovative mobile application that connects donors with those in need. We believe that technology has the power to save lives and we are committed to making a positive impact on the world through our blood bank app.
              </Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={6}>
            <Section>
              <Typography variant="h5" component="h2" gutterBottom>
                Purpose and Goals
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is simple yet profound: to provide a convenient and efficient platform for individuals to donate blood, request blood, and connect with us in times of emergency. We aim to bridge the gap between donors and recipients, ultimately saving lives and making a difference in the community.
              </Typography>
            </Section>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Section>
              <Typography variant="h5" component="h2" gutterBottom>
                Introduction to the Team
              </Typography>
              <Typography variant="body1" paragraph>
                Our team is comprised of passionate individuals who are dedicated to making a difference in the world. From our developers to our support staff, each member plays a crucial role in ensuring the success of our blood bank app. We work tirelessly to improve our services and provide the best possible experience for our users.
              </Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={6}>
            <Section>
              <Typography variant="h5" component="h2" gutterBottom>
                Offerings
              </Typography>
              <Typography variant="body1" paragraph>
                Through our blood bank app, users have the ability to easily request blood when in need, donate blood to help those in need, and contact us for any inquiries or assistance. Our platform is user-friendly, secure, and designed to streamline the blood donation process for both donors and recipients.
              </Typography>
            </Section>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Section>
              <Typography variant="h5" component="h2" gutterBottom>
                Customer Opinions
              </Typography>
              <Typography variant="body1" paragraph>
                Our users have praised our blood bank app for its simplicity, efficiency, and impact on their lives. Many have shared their heartwarming stories of receiving life-saving blood donations through our platform, highlighting the importance of our services in times of crisis.
              </Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={6}>
            <Section>
              <Typography variant="h5" component="h2" gutterBottom>
                Achievements
              </Typography>
              <Typography variant="body1" paragraph>
                Over the years, we have successfully facilitated countless blood donations, saved numerous lives, and garnered recognition for our commitment to making a difference in the world. We take pride in our accomplishments and are constantly striving to improve and expand our services.
              </Typography>
            </Section>
          </Grid>
        </Grid>

        <Box textAlign="center" sx={{ marginTop: 4 }}>
          <StyledButton variant="contained" color="primary" size="large">
            Download Our App
          </StyledButton>
        </Box>
      </StyledContainer>
      <Footer />
    </>
  );
}

export default AboutUs;

