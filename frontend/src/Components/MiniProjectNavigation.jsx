import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NavigationButtons() {
  const navigate = useNavigate();

  const buttons = [
    { label: 'To-Do', route: '/to-do', color: 'primary' },
    { label: 'User Management', route: '/users', color: 'secondary' },
    { label: 'Gallery', route: '/gallery', color: 'success' },
  ];

  return (
    <>
    <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{ px: 3, borderRadius: 2 }}
        >
          Back
        </Button>
    <Box
      sx={{
        height: '75vh',
        bgcolor: 'background.default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Stack spacing={4} alignItems="center">
        <Typography variant="h4" fontWeight={700} color="text.primary">
          Navigate to Your Projects
        </Typography>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
          {buttons.map((btn) => (
            <Button
              key={btn.route}
              variant="contained"
              color={btn.color}
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(btn.route)}
              sx={{
                minWidth: 160,
                boxShadow: 3,
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {btn.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
    </>
  );
}
