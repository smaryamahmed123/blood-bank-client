
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Container, CssBaseline, Typography, Skeleton, Stack } from '@mui/material';
import Navbar from '../component/Navbar';
import bloodDonation from '../assets/bloodDonation.webp'
import { BASE_URL3 } from '../Constant';
import SearchBar from '../component/SearchBar';

function ServicesPage() {
    const [donors, setDonors] = useState([]);
    const [filteredDonors, setFilteredDonors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDonors();
    }, []);

    const fetchDonors = async () => {
        try {
            const response = await axios.get(`${BASE_URL3}/doner`);
            setDonors(response.data);
            setFilteredDonors(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching donors:', error);
            setLoading(false);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = donors.filter(donor => donor.bloodGroup.toLowerCase().includes(query.toLowerCase()));
        setFilteredDonors(filtered);
    };

    const handleContactClick = (contactInfo) => {
        if ('href' in HTMLAnchorElement.prototype) {
            const link = document.createElement('a');
            link.href = `tel:${contactInfo}`;
            link.click();
        } else {
            console.error('Your browser does not support calling phone numbers.');
        }
    };

    return (
        <>
            <Navbar />
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '100px' }}>
                    <Typography variant="h4" sx={{ mb: 3 }}>Available Donors</Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                        <SearchBar
                            type="text"
                            placeholder="Search by blood group..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </Stack>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
                        {loading ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <Card key={index} sx={{ width: 300 }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Skeleton variant="rectangular" width={210} height={140} />
                                            <Skeleton variant="text" width={210} height={20} />
                                            <Skeleton variant="text" width={210} height={20} />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            ))
                        ) : filteredDonors.length === 0 ? (
                            <Typography variant="body1" color="text.secondary">No donors found.</Typography>
                        ) : (
                            filteredDonors.map((donor) => (
                                <Card key={donor._id} sx={{ width: 300 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Donor"
                                        height="140"
                                        image={`https://blood-bank-server-sable.vercel.app/${donor.image}`}
                                        sx={{
                                            height: 300,
                                            objectFit: 'cover',
                                            width: '100%',
                                            borderRadius: '8px',
                                            boxShadow: 3,
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">Name: {donor.name}</Typography>
                                        <Typography>Blood Group: {donor.bloodGroup}</Typography>
                                        <Typography>
                                            Contact Info:
                                            <span
                                                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                                onClick={() => handleContactClick(donor.contactInfo)}
                                            >
                                                {donor.contactInfo}
                                            </span>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Message: {donor.messages}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default ServicesPage;
