import { Container, ThemeProvider, Grid, Box, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import GlobalTheme from '../../../../Theme/GlobalTheme'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

const EnterDetails = (props) => {
    const {formData} = props;
    const user = useSelector((state) => state.userInfo);

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const handleForm = ( data) => {
        formData(data);
    }   

    return (
        <ThemeProvider theme={GlobalTheme}>
            <Container maxWidth='lg '>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Grid container>
                        <Grid item>

                            <Box>
                                <Typography variant='h6'>Personal Details</Typography>
                                <TextField
                                    type='text'
                                    label='Name'
                                    value={user.username}
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}  
                                    {...register('name', {
                                        required: 'Enter valid Name',
                                      })}
                                      error={Boolean(errors.name)}
                                      helperText={errors.name ? errors.name.message : ''}>
                                </TextField>

                                <TextField
                                    type='text'
                                    label='Email'
                                    value={user.email}
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}
                                    {...register('email', {
                                        required: 'Enter your valid Email',
                                      })}
                                      error={Boolean(errors.email)}
                                      helperText={errors.email ? errors.email.message : ''}>
                                </TextField>

                                <TextField
                                    type='tel'
                                    label='Phone Number'
                                    value={user.phoneNo}
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}
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
                                      helperText={errors.phoneNo ? errors.phoneNo.message : ''}>
                                </TextField>
                            </Box>

                            <Box>
                                <Typography variant='h6'>Location Details</Typography>

                                <TextField
                                    type='text'
                                    label='Address Line 1'
                                    fullWidth
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}
                                    {...register('address1', {
                                        required: 'Enter your valid Address',
                                      })}
                                      error={Boolean(errors.address1)}
                                      helperText={errors.address1 ? errors.address1.message : ''}>
                                </TextField>

                                <TextField
                                    type='text'
                                    label='Address Line 2'
                                    fullWidth
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}
                                    {...register('address2')}>
                                </TextField>

                                <TextField
                                    type='text'
                                    label='Locality'
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}
                                    {...register('locality', {
                                        required: 'Enter your Locality',
                                      })}
                                      error={Boolean(errors.locality)}
                                      helperText={errors.locality ? errors.locality.message : ''}>
                                </TextField>

                                <TextField
                                    type='number'
                                    label='PIN'
                                    variant='outlined'
                                    margin='normal'
                                    sx={{ margin: '1rem' }}
                                    {...register('pin', {
                                        required: 'Enter your PIN Code',
                                      })}
                                      error={Boolean(errors.pin)}
                                      helperText={errors.pin ? errors.pin.message : ''}>
                                </TextField>

                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'center'}>
                        <Grid item>
                        <Button type='submit' variant='contained' sx={{width:'15rem', mt:'10px'}} >Next</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </ThemeProvider>
    )
}

export default EnterDetails;