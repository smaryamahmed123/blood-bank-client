import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material';
import FeaturedItemsSection from '../BloodDonationCamps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gettingBlood from '../../assets/getingBblood.jpg';
import donatingBlood from '../../assets/donatingBlood.jpg';
import BloodDonationEvents from '../../assets/BloodDonationEvents.png'
import EmergenceBloodDonation from '../../assets/EmergencyBloodRequests.png'
import blood4 from '../../assets/blood4.png'
function Services() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const heroImages = [
    { id: 1, src: gettingBlood, alt: 'Person receiving blood donation' },
    { id: 2, src: donatingBlood, alt: 'Person donating blood' },
    // { id: 3, src: 'image_url_3', alt: 'Mobile app showing blood donation options' },
  ];

  const subServices = [
    {
      title: 'Emergency Blood Requests',
      description: 'Sudden need for blood? Our platform allows you to request blood donations quickly and efficiently.',
      image: EmergenceBloodDonation,
      cta: 'Request Emergency Blood Now'
    },
    {
      title: 'Blood Donation Events',
      description: 'Participate in community blood donation events and make a difference in the lives of others.',
      image: BloodDonationEvents,
      cta: 'Join Our Blood Donation Event'
    },
    {
      title: 'Notification System',
      description: 'Stay updated on blood donation requests and availability through our notification system.',
      image: blood4,
      cta: 'Stay Informed with Our Notification System'
    }
  ];

  // Example FAQs data
  const faqs = [
    {
      question: 'How do I request blood donations through your platform?',
      answer: 'You can easily request blood donations by filling out a form on our website or mobile app.'
    },
    {
      question: 'Can I donate blood through your service?',
      answer: 'Yes, you can sign up as a blood donor on our platform and schedule your donation.'
    },
    {
      question: 'Is there a fee for using your blood donation service?',
      answer: 'No, our service is free for both blood donors and recipients.'
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: '100px', marginBottom: '5rem' }}>




        {/* Hero Section */}
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mt: 6,
            mb: 4,
            color: 'primary.main', // Customize color
            fontWeight: 'bold', // Customize font weight
            letterSpacing: '0.1em', // Customize letter spacing
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add text shadow for effect
            fontSize: {
              xs: '2rem', // Font size for extra-small screens
              sm: '3rem', // Font size for small screens and up
            },
          }}
        >
          Save Lives with Our Blood Donation Service
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {heroImages.map(image => (
            <Grid item key={image.id} xs={12} sm={6} md={4}>
              <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Grid>
          ))}
        </Grid>

        {/* Intro text */}
        <Box sx={{ my: 4 }}>
          <Typography variant="body1" align="center">
            Our blood donation service offers a seamless platform for individuals to request or donate blood.
            With timely access to blood donations, streamlined communication, and a user-friendly experience,
            our service ensures that those in need of blood transfusions receive the necessary support promptly.
          </Typography>
        </Box>

        {/* CTA Buttons */}
        <Grid container spacing={2} justifyContent="center" sx={{ my: 4 }}>
          <Grid item>
            <Button variant="contained" color="primary" size="large">Donate Now and Save Lives</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">Request Blood Now</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">Download Our Blood Bank App</Button>
          </Grid>
        </Grid>

        {/* Sub Services */}
        <Grid container spacing={3} sx={{ my: 4 }}>
          {subServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image
                  } // Replace with actual image URL
                  alt={service.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{service.description}</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>{service.cta}</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQs */}
        <Box sx={{ my: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Final CTAs */}
        <Grid container spacing={2} justifyContent="center" sx={{ my: 4 }}>
          <Grid item>
            <Button variant="contained" color="primary" size="large">Make a Difference Today, Donate Blood</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">Join Us in Saving Lives Through Blood Donation</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">Download Our App and Start Donating Blood Now</Button>
          </Grid>
        </Grid>

      </Container>

      <Footer />
    </>
  );
}

export default Services;
