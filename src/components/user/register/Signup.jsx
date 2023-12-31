import { useState } from 'react';
import { Grid, ThemeProvider, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import GlobalTheme from '../../../Theme/GlobalTheme';
import { CommonButton } from '../../../Common/CommonButton';
import axios from '../../../config/axios';
import { isUser } from '../../../Redux/user/AuthReducer';
import { addUserInfo } from '../../../Redux/user/UserInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle } from '../../../config/firebase';

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const authUser = useSelector((state) => {
    return state.auth;
  })

  console.log(authUser, " : SIGN UP AUTH STATUS");
  console.log("Register page onboard!");

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then((result)=>{
      if(result.status === false){
        setError(result?.message);
      } else {
        localStorage.setItem('userToken', result?.accessToken);
        dispatch(isUser(result?.accessToken));
        dispatch(addUserInfo(result?.userData));
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const onSubmit = (data => {
    console.log('Form Submitted: ', data);
    axios
      .post('/signup', data)
      .then((response) => {
        if (response.data.status === false) {
          //Show Error message to user
          setError(response.data?.message);
        } else {
          localStorage.setItem('userToken', response?.data?.accessToken);
          dispatch(isUser(response.data?.accessToken));
          dispatch(addUserInfo(response.data?.userData))
          navigate('/');
        }
      })
      .catch((err) => {
        console.log('Axios Error: ', err);
      });

  })




  return (
    <ThemeProvider theme={GlobalTheme}>
      <Grid container alignItems={'center'} justifyContent={'center'} >

        <Grid item xs={12} sm={6} justifyContent={'center'}>
          <Grid container sx={{ pt: 5, mt: 3, textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid item>
                <Typography variant='h4' sx={{ fontWeight: 600 }}>Create an Account</Typography>
                <Typography variant='body1' mb={3}>Already Have an Account?<NavLink to='/login' color='#018A44'> Login </NavLink> </Typography>
              </Grid>
              <Grid item sx={{width: '20rem'}}>
                <TextField
                  fullWidth
                  type='text'
                  label='Full Name'
                  variant='outlined'
                  margin='dense'
                  {...register('username', {
                    required: 'Username is required',
                    minLength: {
                      value: 4,
                      message: 'Enter username with atleast 4 characters'
                    },
                    pattern: {
                      value: /^[A-Za-z][A-Za-z0-9]*$/,
                      message: 'Enter valid Username'
                    }
                  })
                  }
                  error={Boolean(errors.username)}
                  helperText={errors.username ? errors.username.message : ''}
                />

                <TextField
                  fullWidth
                  type='email'
                  label='Email'
                  variant='outlined'
                  margin='dense'
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
                  type='tel'
                  label='Phone No'
                  variant='outlined'
                  margin='dense'
                  {...register('phoneNo', {
                    required: 'Phone Number is required',
                    minLength: {
                      value: 10,
                      message: "Invalid Phone Number"
                    },
                    maxLength: {
                      value: 10,
                      message: "Invalid Phone Number"
                    }
                  })}
                  error={Boolean(errors.phoneNo)}
                  helperText={errors.phoneNo ? errors.phoneNo.message : ''} />

                <TextField
                  fullWidth
                  type='password'
                  label='Password'
                  variant='outlined'
                  margin='dense'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password should contain 8 Characters'
                    }
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password ? errors.password.message : ''} />

                <TextField
                  fullWidth
                  type='password'
                  label='Confirm Password'
                  variant='outlined'
                  margin='dense'
                  {...register('confirmPassword', {
                    required: 'Re Enter Password',
                    validate: (value) => value === getValues('password') || 'Re Enter your password'
                  })}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword ? errors.confirmPassword.message : ''} />

                {error ? (<div><Typography variant='body2' color={'error'}>{error}</Typography></div>) : ''}
              </Grid>

              <Box mt={3} mb={2}>
                <CommonButton type={'submit'} variant={'contained'} sx={{ px: 6 }}>Register</CommonButton>
              </Box>
              <Typography>OR</Typography>
          <Box mt={2}>
          <CommonButton variant={'outlined'} color={'secondary'} sx={{px: 6}} onClick={handleSignInWithGoogle}>Signin with Google</CommonButton>
          </Box>
            </form>



          </Grid>
        </Grid>

        <Grid item xs={12} md={6} marginTop={5}>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src='assets\signuppage.png' alt='Signup Page Vector' width={'100%'} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )

}
