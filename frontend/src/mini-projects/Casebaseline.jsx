// Step-by-step Installation and Setup Instructions:

// 1. Open your terminal and navigate to your React project folder.
// 2. Run the following command to install Material UI:
//    npm install @mui/material @emotion/react @emotion/styled
//
// 3. Create the following two files in your project:
//    - App.js (or App.tsx)
//    - LoaderDemo.js (or LoaderDemo.tsx)

// App.js or App.tsx
import React from 'react';
import LoaderDemo from './LoaderDemo';

export function Appbase() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My App</h1>
      <LoaderDemo />
    </div>
  );
}


// LoaderDemo.js or LoaderDemo.tsx
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoaderDemo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Indeterminate Loader */}
      <CircularProgress />

      {/* Color Variants */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Box>

      {/* Size Variants */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <CircularProgress size={30} />
        <CircularProgress size={40} />
        <CircularProgress size={'3rem'} />
      </Box>

      {/* Determinate Progress */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
      </Box>

      {/* Optimized for high CPU usage */}
      <CircularProgress disableShrink />
    </Box>
  );
}