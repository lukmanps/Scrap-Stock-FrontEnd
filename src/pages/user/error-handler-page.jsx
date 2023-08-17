import {
    ThemeProvider,
    Container,
    Typography,
    Box,
    Button
} from '@mui/material';
import React from 'react'
import GlobalTheme from '../../Theme/GlobalTheme';
import UserNavBar from '../../components/user/layout/user-navbar';

const ErrorHandler = ({ error, errorInfo }) => {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <Box>
                <UserNavBar button={'Login'} link={'login'}/>
            </Box>

            <Box alignItems={'center'} justifyContent={'center'}>
                <Container maxWidth="md" >
                    <Box mt={8} textAlign="center">
                        <Typography variant="h4" color={'secondary'}>
                            Oops, something went wrong!
                        </Typography>
                        <Typography variant="body1" color={'secondary'}>
                            An error occurred while processing your request.
                        </Typography>
                        {/* <Typography variant="body2" gutterBottom>
                        Error: {error && error.toString()}
                    </Typography> */}
                        {/* <Typography variant="body2">
                        Stack Trace: {errorInfo && errorInfo.componentStack}
                    </Typography> */}
                        <Button sx={{ my: 2 }} variant="contained" color="primary" onClick={() => window.location.reload()}>
                            Refresh Page
                        </Button>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default ErrorHandler;