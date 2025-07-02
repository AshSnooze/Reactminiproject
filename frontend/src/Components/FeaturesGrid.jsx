import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';

const features = [
  { title: 'Fast Performance', description: 'Experience lightning-fast speeds with our optimized platform.' },
  { title: 'Secure', description: 'Your data is protected with industry-leading security standards.' },
];

export default function FeaturesGrid() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        Our Features
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" mb={6}>
        Built for performance, security, and flexibility.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FeatureCard {...feature} iconIndex={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
