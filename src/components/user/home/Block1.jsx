import React from 'react'
import { Box, Container, Grid, Button, ThemeProvider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { CommonButton } from '../../../Common/CommonButton';

const Block1 = () => {
    return (
        <>
            <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item textAlign={'left'} sx={{ display: { md: 'flex', xs: 'none' } }}>
                    <Box width={'100%'}>
                        <Typography variant='h3' sx={{ fontWeight: '600', mb: 2 }}>From waste to wonder: <br />Building a Greener <br />Tommorrow</Typography>
                        <CommonButton variant='contained' size={'large'} >Discover More</CommonButton>
                    </Box>
                </Grid>
                <Grid item textAlign={'left'} sx={{ display: { sm: 'flex', md: 'none' } }}>
                    <Box mt={5}>
                        <Typography variant='h4' sx={{ fontWeight: '600', mb: 2 }}>From waste to wonder: <br />Building a Greener  <br />Tommorrow</Typography>
                        <CommonButton variant='contained' >Discover More</CommonButton>
                    </Box>
                </Grid>

                <Grid item sm={12} md={6} alignContent={'center'} justifyContent={'center'}>
                    <Box>
                        <img src='assets\homevector.png' alt='Home Page Vector' width={'100%'} />
                    </Box>
                </Grid>
            </Grid></>

    )
}

export default Block1