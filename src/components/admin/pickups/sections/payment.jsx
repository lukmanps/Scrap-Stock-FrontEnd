import { CardContent, TextField, Box, Card, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../../../config/axios';

const Payment = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user, Payment} = props;
    console.log(user, ' : USer in payment');

    const handlePayment = async (amount) => {
        const { data: {key}} = await axios.get('/admin/get-key');
        const { data: {order} } = await axios.post('/admin/payment', amount, user);
        
        console.log(key, order, " :: Data in handle Payment");
        
        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Scrap Stock",
            description: "Scrap Payment",
            // image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            userId: user,
            callback_url: `http://localhost:8000/admin/payment-verification?amount=${encodeURIComponent(order.amount)}&userId=${encodeURIComponent(user)}`,
            prefill: {
                name: "Scrap Stock admin",
                email: "admin1@scrapstock.com",
                contact: "9876543210"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#018A44"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
        // document.getElementById('rzp-button1').onclick = function (e) {
           
        //     // e.preventDefault();
        // }
    }
    return (
        <Box>
            <Card>
                <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <form onSubmit={handleSubmit(handlePayment)}>
                        <TextField
                            type='text'
                            label='Amount'
                            value={Payment}
                            variant='outlined'
                            size='small'
                            {...register('amount', {
                                required: 'Enter the Amount'
                            })}
                            error={Boolean(errors.amount)}
                            helperText={errors.amount ? errors.amount.message : ''} />
                        <Button type='submit' variant='contained' size='large' sx={{ ml: '1rem' }}>Pay</Button>
                    </form>

                </CardContent>
            </Card>
        </Box>
    )
}

export default Payment;