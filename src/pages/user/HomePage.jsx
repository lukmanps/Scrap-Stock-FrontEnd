import { Box, Container, Grid, Button, ThemeProvider, Typography, Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import GlobalTheme from '../../Theme/GlobalTheme';
import UserNavBar from '../../components/NavBar/UserNavBar';
import { CommonButton } from '../../Common/CommonButton';
import { Margin } from '@mui/icons-material';


function Home() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <UserNavBar button={'Login'} />

      <Box >
        <Box>
          <Container maxWidth='xl' margintop={1}>

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
                  <img src='src\assets\homevector.png' alt='Home Page Vector' width={'100%'} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box padding={5}>
          <Button variant='contained' size='large' sx={{ fontSize: '1.5rem', fontWeight: 500 }}>Sell Scrap</Button>
        </Box>

        <Box>
          <Container maxWidth='xl'>
            <Grid container spacing={12} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
              <Grid item xs={12} md={4} >
                <img src='src\assets\children-vector.png' alt='Children Vector' width={'100%'} />
              </Grid>
              <Grid item xs={12} md={6} textAlign={'left'}>
                <Typography variant='h4' sx={{ fontWeight: 500 }}>Know your Contribution <br /> to the Environment</Typography>
                <Typography variant='body1' sx={{ marginTop: 4 }}>"Know your Contribution to the Environment" is a campaign aimed at raising awareness and empowering individuals to understand the impact of their actions on the environment. By providing information and tools, the campaign encourages people to assess and recognize their personal contributions, both positive and negative, to the environment.</Typography>
              </Grid>

            </Grid>
          </Container>
        </Box>

        <Box>
          <Container maxWidth='xl' >
            <Grid container spacing={3} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} mt={5}>
              <Grid item xs={12} md={3}>
                <Typography variant='h4' textAlign={'left'} sx={{ fontWeight: 500 }}>Step 1</Typography>
                <Card sx={{ backgroundColor: '#018A44', borderRadius: '30px', marginTop: 2, textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    image="\src\assets\choice.png"
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
                    image="\src\assets\schedule.png"
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
                    image="\src\assets\receive-money.png"
                    alt="Choose Material"
                    sx={{ padding: 3, width: '200px', height: 'auto' }} />
                </Card>
                <Typography variant='h5' textAlign={'left'} sx={{ fontWeight: 500, marginTop: 2, marginBottom: 1 }}>Receive Payment</Typography>
                <Typography variant='body2' textAlign={'left'}>Receive payment in any one of the three payment modes via Wallet</Typography>
              </Grid>

            </Grid>
          </Container>
        </Box>
        
      </Box>
    </ThemeProvider>
  )
}

export default Home;