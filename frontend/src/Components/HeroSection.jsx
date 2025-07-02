import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '60vh',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color:'white'}}>
        Adarshkumar Sathiyamoorthy
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, maxWidth: 600 }}>
        Nothing more special about more special one
      </Typography>
      <Button variant="contained" size="large" color="secondary"
      onClick={()=>navigate('/nav')}>
        View Projects
      </Button>
    </Box>
  );
}
