import { Container, ThemeProvider, Grid, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import React from 'react'
import AdminTheme from '../Theme/AdminTheme'

const PaymentSuccess = () => {
    return (
        <ThemeProvider theme={AdminTheme}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12}  sx={{display:"flex",justifyContent:'center'}}>
                        <img src='\src\assets\payment-success.jpg' alt='payment-success' width={'50%'} />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                    <Grid item>
                    <Typography variant='h3' fontWeight={600}>Payment Success</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'} m={2}>
                    <Button variant='contained' size='large'><Link to={'/admin/pickups'}>Continue</Link></Button>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default PaymentSuccess