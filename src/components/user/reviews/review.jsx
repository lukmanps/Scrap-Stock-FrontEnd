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
    CardActions
} from '@mui/material';
import React, { useEffect, useState } from 'react'
import GlobalTheme from '../../../Theme/GlobalTheme';
import fetchReviews from '../../../APIs/user/fetchReviews';


const Review = () => {
    const [reviews, setReview] = useState([]);
    useEffect(()=> {
        fetchReviews()
        .then((review) => {
            console.log(review, ":: Reviews");
            setReview(review);
        });
    }, [])
    return (
        <ThemeProvider theme={GlobalTheme}>
            <Box textAlign={'center'} my={5}>
                <Typography variant='h3' fontWeight={500}>Reviews</Typography>
                <Typography variant='body2' fontWeight={300}>Check out our customer's scrap selling experiences!</Typography>
            </Box>

            <Grid container spacing={2}>

                {reviews.map((review) => (
                    <Grid item xs={6} md={4} lg={3}>
                    <Card sx={{ borderRadius: '15px' }} >
                        <CardContent>
                            <Typography>
                               {review.review}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Rating
                                name="simple-controlled"
                                value={review.value}
                            />
                        </CardActions>

                        <CardContent>
                            {review.user.username}
                        </CardContent>
                    </Card>
                </Grid>
                ))}
                

                
            </Grid>
        </ThemeProvider>
    )
}

export default Review