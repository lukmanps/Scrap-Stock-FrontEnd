import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const PageNotFound = () => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh"
            >
                <Typography variant="h1" color="primary" gutterBottom>
                    404
                </Typography>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Oops! Page not found.
                </Typography>
                <Button
                    component={RouterLink}
                    to="/"
                    variant="contained"
                    color="primary"
                    startIcon={<HomeIcon />}
                    sx={{mt: 5}}
                >
                    Back to Home
                </Button>
            </Box>
        </>
    )
}

export default PageNotFound;