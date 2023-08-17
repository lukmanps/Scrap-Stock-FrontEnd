import {
    Container,
    ThemeProvider,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Stack
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminTheme from '../../../Theme/AdminTheme';
import CircularProgress from '@mui/material/CircularProgress';
import PickupUserInfo from './sections/user-info';
import PickupStatus from './sections/status';
import ScrapItems from './sections/scrap-items';
import Payment from './sections/payment';
import { useParams } from 'react-router-dom';
import axios from '../../../config/axios';

const PickupDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');

    const handleStatus = (value) => {
        setStatus(value);
        console.log(value, " :: Vaue kin handleStatus");
    }

    useEffect(() => {
        axios.get('/admin/pickup-details?id='+id)
            .then((response) => {
                setData(response?.data);
            })
            .catch((err) => {
                console.log(err, " : AXIOS ERROR");
            })
    }, [status]);
    
    return (
        <ThemeProvider theme={AdminTheme}>
            <Box component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}>
                <Container maxWidth={'xl'}>
                    <Stack spacing={3}>
                        <Stack direction="column"
                            justifyContent="space-between"
                            spacing={4}>
                            <Stack spacing={1}>
                                <Typography variant="h4" fontWeight={500}>
                                    Pickup Details
                                </Typography>
                                

                                <Stack display={'inline'}>
                                    <Typography color="text.seconday">Id: {data?._id}</Typography>
                                    <Typography variant='body' mr={3} color="text.secondary">Date: {data?.date}</Typography>
                                    <Typography variant='body' color="text.secondary">Status: {data?.status}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        <Grid container mt={4} spacing={3}>
                            <Grid
                                xs={12} md={8}>
                                <PickupUserInfo data={data} />
                            </Grid>
                            <Grid xs={12} md={4}>
                                <PickupStatus status={data?.status} handleStatus={handleStatus} pickupId={data?._id}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid xs={12} md={12} >
                                <ScrapItems pickupId={id}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Payment user={data?.user} payment={data?.totalAmount}/>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>

        </ThemeProvider>
    )
}

export default PickupDetails