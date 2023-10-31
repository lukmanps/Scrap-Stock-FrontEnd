import React from 'react'
import { Box, Container, Grid, Button, ThemeProvider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { CommonButton } from '../../../Common/CommonButton';

const Block3 = () => {
    return (
        <div>
            <Grid container spacing={3} justifyContent={'space-around'} mt={5}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h4' textAlign={'left'} sx={{ fontWeight: 500 }}>Step 1</Typography>
                    <Card sx={{ backgroundColor: '#018A44', borderRadius: '30px', marginTop: 2, textAlign: 'center' }}>
                        <CardMedia
                            component="img"
                            image="\assets\choice.png"
                            alt="Choose Material"
                            sx={{ padding: 3, width: '200px', height: 'auto' }} />
                    </Card>
                    <Typography variant='h5' textAlign={'left'} sx={{ fontWeight: 500, marginTop: 2, marginBottom: 1 }}>Choose Material</Typography>
                    <Typography variant='body2' textAlign={'left'}>Out of our 40+ scrap categories choose the scrap you want to sell.</Typography>
                </Grid>


                <Grid item xs={12} md={3}>
                    <Typography variant='h4' textAlign={'left'} sx={{ fontWeight: 500 }}>Step 2</Typography>
                    <Card sx={{ backgroundColor: '#018A44', borderRadius: '30px', marginTop: 2 }}>
                        <CardMedia
                            component="img"
                            image="\assets\schedule.png"
                            alt="Choose Material"
                            sx={{ padding: 3, width: '200px', height: 'auto' }} />
                    </Card>
                    <Typography variant='h5' textAlign={'left'} sx={{ fontWeight: 500, marginTop: 2, marginBottom: 1 }}>Schedule Pickup</Typography>
                    <Typography variant='body2' textAlign={'left'}>Select your preferred date and add the scrap pick-up location.</Typography>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant='h4' textAlign={'left'} sx={{ fontWeight: 500 }}>Step 3</Typography>
                    <Card sx={{ backgroundColor: '#018A44', borderRadius: '30px', marginTop: 2, textAlign: 'center' }}>
                        <CardMedia
                            component="img"
                            image="\assets\receive-money.png"
                            alt="Choose Material"
                            sx={{ padding: 3, width: '200px', height: 'auto' }} />
                    </Card>
                    <Typography variant='h5' textAlign={'left'} sx={{ fontWeight: 500, marginTop: 2, marginBottom: 1 }}>Receive Payment</Typography>
                    <Typography variant='body2' textAlign={'left'}>Receive payment in any one of the three payment modes via Wallet</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Block3;