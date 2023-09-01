import {
    Container,
    Grid,
    ThemeProvider,
    Avatar,
    Typography,
    Button,
    Box,
    TextField
} from '@mui/material'
import React, { useState } from 'react'
import GlobalTheme from '../../../Theme/GlobalTheme'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { addUserInfo } from '../../../Redux/user/UserInfoReducer';
import axios from '../../../config/axios';
import Axios from 'axios'

const UserProfile = () => {
    const [username, setUsername] = useState('Lukman');
    const [phoneNo, setPhoneNo] = useState('9072901837');
    
    const [image, setImage] = useState('');
    const user = useSelector((state)=> state.userInfo);
    console.log(user, 'User data in profile');

    const [dp, setDp] = useState(user.profilePicture);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = () => {
        console.log(username, phoneNo, " :: Updated Details");
    }

    const uploadImage = () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'eujjmc8m');

        Axios.post('https://api.cloudinary.com/v1_1/dth6brhsk/image/upload', formData)
            .then((response) => {
                const newDp = response?.data?.secure_url;
                setDp(newDp);

                const data = {
                    id: user._id,
                    dp: newDp
                }
                axios.post('/update-profile-picture', data)
                .then((response) => {
                    if(response?.data?.status === false){
                        toast.error("Couldn't update profile picture!");
                    } else {
                        dispatch(addUserInfo(response?.data?.profileUpdated));
                        toast.success('Profile Picture Updated!');
                    }
                })
                .catch((err) => {
                    console.log(err, ' :: Error whie updating profile Pictrue');
                }) 
            })
    }


    return (
        <ThemeProvider theme={GlobalTheme}>
             <Toaster />
            <Container maxWidth={'xl'} sx={{ justifyContent: 'center', alignItems: 'center', my: 5 }}>

                <Grid container sx={{ marginBottom: '3rem' }}>
                    <Grid item>
                        <Typography variant='h4' fontWeight={600}>User Profile</Typography>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Grid item xs={12} md={8} sx={{ justifyContent: 'center' }}>
                                <Avatar alt="Lukman" sx={{ width: '10rem', height: '10rem' }} src={dp}/>
                                <input
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                    }}
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*" />
                                <Button variant='outlined' size='small' sx={{ ml: 5, mt: 1 }} onClick={uploadImage}>Change</Button>
                            </Grid>

                        </Box>
                        <Box>
                            <Grid item xs={12} md={4}>
                                <Typography variant='h4'>Lukman</Typography>
                                <Typography variant='body1' fontWeight={300}>lukmanps2001@gmail.com</Typography>
                                <Typography variant='body1' fontWeight={300}>9072910837</Typography>
                            </Grid>
                        </Box>
                    </Grid>


                    <Grid container sx={{ mt: 3 }}>
                        <Grid item sx={{ textAlign: 'center' }}>
                            <form onSubmit={handleSubmit(handleUpdate)}>
                                <TextField
                                    label='username'
                                    variant='outlined'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />

                                <TextField
                                    label='Phone Number'
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    variant='outlined'
                                    sx={{ mt: 2 }} />

                                <Box mt={1}>
                                    <Button type='submit' variant='contained'>Update</Button>
                                </Box>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>

    )
}

export default UserProfile