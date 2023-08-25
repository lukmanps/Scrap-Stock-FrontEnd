import { Container, ThemeProvider, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'
import GlobalTheme from '../../../Theme/GlobalTheme'

const PickupSuccess = () => {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <Container maxWidth='xl'>
                <Grid container>
                    <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: 'center' }}>
                        <img src='assets\pickup-scheduled.png' alt='pickup-scheduled' width={'50%'} />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                    <Grid item>
                        <Typography color={'primary'} variant='h3' fontWeight={600}>Pickup Scheduled!</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'} m={2}>
                    <Button className={'nav-link'} variant='outlined' size='large'><Link to={'/recent-pickups'}>Continue</Link></Button>
                    <Button className={'nav-link'} variant='outlined' size='large'><Link to={'/sell-scrap'}>Shedule another Pickup</Link></Button>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default PickupSuccess