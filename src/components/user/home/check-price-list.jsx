import React, { useState, useEffect } from 'react';
import {
    Card,
    Box,
    CardActions,
    CardContent,
    Container,
    Grid,
    Button,
    Typography,
    Checkbox,
    ThemeProvider,
    InputAdornment,
    TextField,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import toast, { Toaster } from 'react-hot-toast';
import ScrapCard from '../../../Common/scrap-card';
import AdminTheme from '../../../Theme/AdminTheme';
import fetchScrapItems from '../../../APIs/user/fetchScraps';
import axios from '../../../config/axios';
import SearchBar from './section/search-bar';

const CheckPriceList = () => {

    const [scrap, setScrap] = useState([]);
    const [search, setSearch] = useState('');

    const handleScrapSearch = (value) => {
        setSearch(value)
    }


    useEffect(() => {
        fetchScrapItems()
            .then((response) => {
                setScrap(response);
            })
            .catch((err) => {
                toast.error(err);
            })
    }, []);

    let filterScrap = []

    if (search !== '') {
        filterScrap = scrap.filter(item => item.scrap.toLowerCase().includes(search.toLowerCase()))
    } else {
        filterScrap = scrap;
    }

    return (
        <ThemeProvider theme={AdminTheme}>
            <Container maxWidth='xl'>
                <Toaster />
                <Grid container sx={{ marginBottom: '2rem' }}>
                    <Grid item>
                        <Typography variant='h4' fontWeight={600}>Scrap Price List</Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginBottom: '2rem' }}>
                    <Grid item xs={12} lg={12}>
                        <SearchBar setSearch={handleScrapSearch} search={search} />
                    </Grid>
                </Grid>

                <Box sx={{ m: '1rem' }}><Typography variant='h5'>Paper</Typography></Box>

                <Grid container spacing={2}>
                    {filterScrap
                        .filter((scrapItem => scrapItem.category === 'Paper'))
                        .map((scrapItem) => (
                            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
                                <Card sx={{ borderRadius: '15px' }}>
                                    <CardContent>
                                        <Typography variant='h5' align='left'>
                                            {scrapItem.scrap}
                                        </Typography>
                                        <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                <Box sx={{ m: '1rem' }}><Typography variant='h5'>Plastic</Typography></Box>

                <Grid container spacing={2}>
                    {filterScrap
                        .filter((scrapItem => scrapItem.category === 'Plastic'))
                        .map((scrapItem) => (
                            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
                                <Card sx={{ borderRadius: '15px' }}>
                                    <CardContent>
                                        <Typography variant='h5' align='left'>
                                            {scrapItem.scrap}
                                        </Typography>
                                        <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                <Box sx={{ m: '1rem' }}><Typography variant='h5'>Metals</Typography></Box>

                <Grid container spacing={2}>
                    {filterScrap
                        .filter((scrapItem => scrapItem.category === 'Metal'))
                        .map((scrapItem) => (
                            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
                                <Card sx={{ borderRadius: '15px' }}>
                                    <CardContent>
                                        <Typography variant='h5' align='left'>
                                            {scrapItem.scrap}
                                        </Typography>
                                        <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                <Box sx={{ m: '1rem' }}><Typography variant='h5'>E-Waste</Typography></Box>

                <Grid container spacing={2}>
                    {filterScrap
                        .filter((scrapItem => scrapItem.category === 'E-waste'))
                        .map((scrapItem) => (
                            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
                                <Card sx={{ borderRadius: '15px' }}>
                                    <CardContent>
                                        <Typography variant='h5' align='left'>
                                            {scrapItem.scrap}
                                        </Typography>
                                        <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                <Box sx={{ m: '1rem' }}><Typography variant='h5'>Other</Typography></Box>

                <Grid container spacing={2}>
                    {filterScrap
                        .filter((scrapItem => scrapItem.category === 'other'))
                        .map((scrapItem) => (
                            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
                                <Card sx={{ borderRadius: '15px' }}>
                                    <CardContent>
                                        <Typography variant='h5' align='left'>
                                            {scrapItem.scrap}
                                        </Typography>
                                        <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                


            </Container>
        </ThemeProvider>
    )
}

export default CheckPriceList