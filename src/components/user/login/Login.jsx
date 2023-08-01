import { Grid, ThemeProvider, TextField, InputBase, CardActionArea, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from '../../../config/axios'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUser } from '../../../Redux/user/AuthReducer';
import { addUserInfo } from '../../../Redux/user/UserInfoReducer';
import { useForm } from 'react-hook-form';
import GlobalTheme from '../../../Theme/GlobalTheme';
import { CommonButton } from '../../../Common/CommonButton';



export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const authUser = useSelector((state) => {
    return state.auth;
  });

  const userInfo = useSelector((state) => {
    return state.userInfo
  })

  console.log(authUser, " : LOGIN AUTH STATUS");
  console.log(userInfo, " :USER INFORMATION");

  const { register, handleSubmit, formState: { errors } } = useForm();

  let loginErr = '';

  const onSubmit = (loginData, event) => {
    event.preventDefault();
    console.log(loginData, "Data in Login");
    axios
      .post('/login', loginData)
      .then((response) => {
        if (response.data.status === false) {
          console.log(response.data?.message, ': RESPONSE');
          //Show error message to user
          // loginErr = response.data?.message;
          setError(response.data?.message);
          console.log(loginErr, ': LOGin errr');
        } else {
          localStorage.setItem('userData', response.data?.accessToken);
          console.log(response.data?.userData)
          dispatch(isUser(response.data?.accessToken));
          dispatch(addUserInfo(response.data?.userData));
          navigate('/');
        }
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err);
      })

  };

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Grid container alignItems={'center'} justifyContent={'center'}>

        <Grid container xs={12} sm={6} justifyContent={'center'}>
          <Grid item sx={{ pt: 5, mt: 3, textAlign: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid>
                <Typography variant='h4' sx={{ fontWeight: 600 }}>Welcome Back!</Typography>
                <Typography variant='body1' mb={3}>Don't Have an Account?<NavLink to='/signup' color='#018A44'> Register </NavLink> </Typography>
              </Grid>
              
              <TextField
                fullWidth
                type='email'
                label='Email'
                variant='outlined'
                margin='normal'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid Email Format'
                  }
                })
                }
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : ''} /> <br/>

              <TextField
                fullWidth
                type='password'
                label='Password'
                variant='outlined'
                margin='dense'
                {...register('password', {
                  required: 'Password is required',
                })}
                error={Boolean(errors.password)}
                helperText={errors.password ? errors.password.message : ''} />


              {error ? (<div><Typography variant='body2' color={'error'}>{error}</Typography></div>) : ''}


              <Box mt={3} mb={2}>
                <CommonButton type={'submit'} variant={'contained'} sx={{ px: 6 }}>Login</CommonButton>
              </Box>


              {/* <Typography>OR</Typography>
              <Box mt={2}>
                <CommonButton variant={'outlined'} color={'secondary'} sx={{ px: 6 }}>Signin with Google</CommonButton>
              </Box> */}
            </form>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} marginTop={5}>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src='src\assets\signuppage.png' alt='Signup Page Vector' width={'100%'} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )

}
