import {
    ThemeProvider,
    Grid,
    TextField,
    Button,
    Box,
    Typography,
    Rating,
} from '@mui/material'
import React from 'react'
import GlobalTheme from '../../../Theme/GlobalTheme';
import { useForm } from 'react-hook-form';
import StarIcon from '@mui/icons-material/Star';
import axios from '../../../config/axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';



const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}




const ReviewForm = () => {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    const user = useSelector((state) => state.userInfo);
    const userId = user._id;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleForm = (data) => {
        const review = data.review;
        console.log(value, 'Rating Values');
        if (value === 0 || !value || !userId) {
            toast.error('Please add your rating to submit!');
        } else {
            axios.post('/review', { userId, review, value })
                .then((response) => {
                    toast.success('Review submitted!')
                })
                .catch((err) => {
                    toast.error("Review couldn't submit")
                })
        }

    }

    return (
        <ThemeProvider theme={GlobalTheme}>
            <Toaster />
            {user && <Grid container mt={5} justifyContent={'center'}>
                <Grid item xs={12} lg={12} textAlign={'center'}>
                    <Typography variant='h5' fontWeight={600}>Write a Review!</Typography>
                </Grid>
                <Grid xs={12} md={12} lg={8} mt={3} justifyContent={'center'}>
                    <Grid item sx={{ justifyContent: 'center'}}>
                        <form noValidate onSubmit={handleSubmit(handleForm)}>
                            
                            <TextField
                                label="Write your valuable feedback!"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6}
                                {...register('review', {
                                    required: true
                                })}
                            />
                            <Box
                                sx={{
                                    my: 2,
                                    width: 200,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>

                                <Rating
                                    size='large'
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'grey' }} fontSize="inherit" />}
                                />
                                {value !== null && (
                                    <Typography sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Typography>
                                )}
                            </Box>
                            <Grid item>
                                <Button variant="contained" type='submit' size='large'>Submit</Button>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>


            </Grid>}

        </ThemeProvider>
    )
}

export default ReviewForm;