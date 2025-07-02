import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box
} from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const icons = [
  <SpeedIcon fontSize="medium" />,
  <SecurityIcon fontSize="medium" />,
  <BuildIcon fontSize="medium" />,
  <SupportAgentIcon fontSize="medium" />,
];

export default function FeatureCard({ title, description, iconIndex }) {
  return (
    <Card
      elevation={6}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 10,
        },
      }}
    >
      <Avatar
        sx={{
          bgcolor: 'primary.main',
          width: 64,
          height: 64,
          mb: 2,
        }}
      >
        {icons[iconIndex]}
      </Avatar>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
