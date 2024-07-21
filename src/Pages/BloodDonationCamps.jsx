import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import bloodDonationDrivesImage from '../assets/Blood Donation Drives.jpg'
import bloodDonationCampsImage from '../assets/donation-camp.webp'
const BloodDonationCamps = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={bloodDonationCampsImage} // Import your image or use a URL
          alt="Blood Donation Camps"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Blood Donation Camps
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Information about upcoming blood donation camps organized by your blood bank.
          </Typography>
        </CardContent>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Card>
    </Grid>
  );
};

const BloodDonationDrives = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={bloodDonationDrivesImage} // Import your image or use a URL
          alt="Blood Donation Drives"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Blood Donation Drives
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Details about ongoing or upcoming blood donation drives conducted by your organization.
          </Typography>
        </CardContent>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Card>
    </Grid>
  );
};

// Implement other components in a similar manner

const FeaturedItemsSection = () => {
  return (
    <Grid container spacing={3}>
      {/* Blood Donation Camps */}
      <BloodDonationCamps />

      {/* Blood Donation Drives */}
      <BloodDonationDrives />

      {/* Implement other featured items components here */}
    </Grid>
  );
};

export default FeaturedItemsSection;
