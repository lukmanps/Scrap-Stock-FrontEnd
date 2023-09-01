import { Container, Grid } from '@mui/material'
import React from 'react';
import UserProfile from '../../components/user/user-profile/user-profile';

const ProfilePage = () => {
    return (
        <div id='user-body'>
            <Container>
                <Grid container > 
                    <Grid item >
                        <UserProfile />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ProfilePage