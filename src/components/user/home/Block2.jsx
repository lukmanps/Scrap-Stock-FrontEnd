import React from 'react';
import { Box, Container, Grid, Button, ThemeProvider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { CommonButton } from '../../../Common/CommonButton';

const Block2 = () => {
    return (
        <>
            <Grid container spacing={12} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={12} md={4} >
                    <img src='\assets\children-vector.png' alt='Children Vector' width={'100%'} />
                </Grid>
                <Grid item xs={12} md={6} textAlign={'left'}>
                    <Typography variant='h4' sx={{ fontWeight: 500 }}>Know your Contribution <br /> to the Environment</Typography>
                    <Typography variant='body1' sx={{ marginTop: 4 }}>"Know your Contribution to the Environment" is a campaign aimed at raising awareness and empowering individuals to understand the impact of their actions on the environment. By providing information and tools, the campaign encourages people to assess and recognize their personal contributions, both positive and negative, to the environment.</Typography>
                </Grid>

            </Grid>
        </>
    )
}

export default Block2