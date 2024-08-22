// DonorRegistrationForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, CssBaseline, Container, MenuItem, Select, Typography, Snackbar, FormControl, FormLabel } from '@mui/material';
import { BASE_URL3 } from '../Constant';
import Navbar from '../component/Navbar';
import blood1 from '../assets/blood2.jpeg';
import Footer from '../component/Footer';
import { Toast } from '../utis/Toost';

function DonorRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        bloodGroup: '',
        contactInfo: '',
        messages: '',
        image: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, type, value, files } = event.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0] // Save the file object instead of its value
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleCloseSnackbar = () => {
        setError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formDataObj = new FormData();
            formDataObj.append('name', formData.name);
            formDataObj.append('bloodGroup', formData.bloodGroup);
            formDataObj.append('contactInfo', formData.contactInfo);
            formDataObj.append('messages', formData.messages);
    
            // Ensure no file field is included
            // formDataObj.append('image', formData.image); // Remove this line
    
            // Call the backend API to add the donor
            await axios.post(`${BASE_URL3}/doner`, formDataObj, {
            });
            // Display success toast
            Toast('Donor registration successful!', 'success');
            // Clear form data
            setFormData({
                name: '',
                bloodGroup: '',
                contactInfo: '',
                messages: ''
                // image: null // Remove this line
            });
        } catch (error) {
            // Display error toast and log the detailed error response
            console.error('Error registering donor:', error.response ? error.response.data : error.message);
            Toast('Error registering donor. Please try again.', 'error');
        }
    };
    
    return (
        <>
            <Navbar />
            <CssBaseline />
            <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
                <Box sx={{ width: '100%', marginBottom: 2 }}>
                    <img src={blood1} alt="Blood Donation" style={{ width: '100%', borderRadius: '4px' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
                        <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>Donor Registration</Typography>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <Select
                            label="Blood Group"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                            required
                            fullWidth
                            displayEmpty
                            margin="dense"
                        >
                            <MenuItem value="" disabled>Select Blood Group</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                        </Select>
                        <TextField
                            label="Contact Info"
                            name="contactInfo"
                            value={formData.contactInfo}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        {/* <FormControl fullWidth margin="normal">
                            <FormLabel htmlFor="donerImg">Upload Image</FormLabel>
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                accept="image/*"
                                required
                            />
                        </FormControl> */}
                        <TextField
                            fullWidth
                            multiline
                            required
                            rows={4}
                            label="Message"
                            name="messages"
                            value={formData.messages}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>Register Donor</Button>
                    </form>
                </Box>
                <Snackbar
                    open={!!error}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message={error}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    severity="error"
                />
                <Snackbar
                    open={success}
                    autoHideDuration={6000}
                    onClose={() => setSuccess(false)}
                    message="Donor registration successful!"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    severity="success"
                />
            </Container>
            <Footer />
        </>
    );
}

export default DonorRegistrationForm;
