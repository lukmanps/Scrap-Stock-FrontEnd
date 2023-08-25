import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color='primary' />
    </Box>
  )
}

export default LoadingScreen;