import {
    Container,
    ThemeProvider,
    Grid,
    Card,
    Typography,
    CardContent,
    Rating,
    Box,
    CardHeader,
    CardActions,
    CircularProgress
} from '@mui/material';
import React, { useEffect, useState } from 'react'
import GlobalTheme from '../../../Theme/GlobalTheme';
import fetchReviews from '../../../APIs/user/fetchReviews';
import LoadingScreen from '../../../Common/Loading-screen';

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],

// })
// 

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReviews()
            .then((response) => {
                setReviews(response);
                setIsLoading(false);
            });
    }, [reviews]);

    if (isLoading) {
        return <LoadingScreen />
    }
    return (
        <ThemeProvider theme={GlobalTheme}>

            <Container maxWidth='lg'>
                <Grid container alignItems={'center'} justifyContent={'center'}>
                    <Box textAlign={'center'} my={5}>
                        <Typography variant='h3' fontWeight={500}>Reviews</Typography>
                        <Typography variant='body2' fontWeight={300}>Check out our customer's scrap selling experiences!</Typography>
                    </Box>
                </Grid>

                <Grid container alignItems={'center'} justifyContent={'center'}>

                    <Swiper
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {reviews.map((review, index) => (
                            <Grid item >
                                <SwiperSlide key={index}>
                                    <Card sx={{ borderRadius: '15px', p:2, justifyContent: 'space-around', height: '12rem' }}>
                                        <CardContent>
                                            <Typography fontWeight={500}>
                                                {review.review}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ m: 0 }}>
                                            <Rating
                                                name="simple-controlled"
                                                value={review.value}
                                            />
                                        </CardActions>

                                        <CardContent sx={{ fontSize: '13px', fontFamily: 'helvetica', color: 'gray', textAlign: 'right' }} >
                                            {review.user.username}
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            </Grid>
                        ))}

                    </Swiper>
                </Grid>
            </Container>
        </ThemeProvider >
    )
}

export default Review