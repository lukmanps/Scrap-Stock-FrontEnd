import { Box, Container, Grid, Button, ThemeProvider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import React, { useEffect } from 'react';
import GlobalTheme from '../../Theme/GlobalTheme';
import UserNavBar from '../../components/user/layout/user-navbar';
import { CommonButton } from '../../Common/CommonButton';
import { Margin } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Review from '../../components/user/reviews/review';
import ReviewForm from '../../components/user/reviews/review-form';
import Block1 from '../../components/user/home/Block1';
import Block2 from '../../components/user/home/Block2';
import Block3 from '../../components/user/home/Block3';

function Home() {
  const navigate = useNavigate();

  const handleSellScrap = () => {
    navigate('/sell-scrap');
  }


  return (
    <div id='user-body'>
      <ThemeProvider theme={GlobalTheme}>
        <UserNavBar button={'Login'} link={'login'} />
        <Box>
          <Container maxWidth='xl' margintop={3}>

            <Block1 />

            <Grid container justifyContent={'center'}>
              <Button variant='contained' size='large' sx={{ fontSize: '1.5rem', fontWeight: 500 }} onClick={handleSellScrap}>Sell Scrap</Button>
            </Grid>

            <Block2 />

            <Block3 />

            <Grid container sx={{ justifyContent: 'center' }} mt={5}>
              <Grid item>
                <Review />
              </Grid>
            </Grid>

            <Grid container>
              <ReviewForm />
            </Grid>

          </Container>
        </Box>
      </ThemeProvider>
    </div>

  )
}

export default Home;