import React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesGrid from './FeaturesGrid';
import Footer from './Footer';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeroSection />
      <FeaturesGrid />
      <Footer />
    </Box>
  );
}
