import { Grid, ThemeProvider, TextField, InputBase, CardActionArea, Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from '../../../config/axios';
import { useState } from 'react';

import React from 'react';
import { useForm } from 'react-hook-form';
import GlobalTheme from '../../../Theme/GlobalTheme';
import { CommonButton } from '../../../Common/CommonButton';

import { useDispatch, useSelector } from 'react-redux';
import { isAdmin } from '../../../Redux/admin/AdminInfoReducer';
import doAdminLogin from '../../../APIs/admin/loginAPI';



export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const admin = useSelector((state) => state.adminInfo);

  const onSubmit = (loginData) => {
    
    doAdminLogin(loginData)
    .then((response)=>{ 
      dispatch(isAdmin(response.token));
      navigate('/admin');
    })
    .catch((err)=>{
      setError(err);
    })

  };

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Container maxWidth='xl'>
        <Grid container alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ display: 'flex', flexDirection: 'row', p: '5rem' }}>

          <Grid item xs={12} md={6} marginTop={5}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <img src="\assets\adminlogin.png" alt='Admin Login Vector' width={'100%'} />
            </Box>
          </Grid>

          <Grid container xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
            <Grid item sx={{ pt: 5, mt: 3, textAlign: 'center' }}>
              <Box sx={{ display: { lg: 'flex' }, pt: 5, mt: 3, textAlign: 'center' }}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                  <Typography variant='h4' sx={{ fontWeight: 600, mt: 5 }}>Admin Login</Typography>
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
                    helperText={errors.email ? errors.email.message : ''} />

                  <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    variant='outlined'
                    margin='normal'
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password ? errors.password.message : ''} />

                  {error ? (<div><Typography variant='body2' color={'error'}>{error}</Typography></div>) : ''}

                  <Box mt={3} mb={2}>
                    <CommonButton type={'submit'} variant={'contained'} sx={{ px: 6 }}>Login</CommonButton>
                  </Box>

                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )

}
