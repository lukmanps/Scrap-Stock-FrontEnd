import { Container, Grid, ThemeProvider } from '@mui/material'
import React from 'react'
import GlobalTheme from '../../Theme/GlobalTheme'

const ProfilePage = () => {
  return (
    <div id='user-body'>
        <ThemeProvider theme={GlobalTheme}>
            <Container maxWidth={'xl'}>
                <Grid container>
                </Grid>
            </Container>
        </ThemeProvider>
    </div>
  )
}

export default ProfilePage