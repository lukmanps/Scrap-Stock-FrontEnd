import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'

const PickupUserInfo = (props) => {
    const {data} = props
    const user = data?.formData;
    return (
        <Box>
            <Card>
                <CardContent>
                    <Box>
                        <Typography variant='h6' >Customer Details</Typography>
                        <Typography variant='body' mr={4} color="text.secondary">Name: {user?.name} </Typography>
                        <Typography variant='body' color="text.secondary">Phone No:  {user?.phoneNo}</Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant='h6'> Location Details</Typography>
                        <Typography color="text.secondary">Address: {user?.address1}, {user?.address2}</Typography>
                        <Typography color="text.secondary">PIN: {user?.pin}</Typography>
                        <Typography color="text.secondary">Locality: {user?.locality}</Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant='h6'>Pickup Date</Typography>
                        <Typography color="text.secondary">Date: {data?.timeSlot?.date}</Typography>
                        <Typography color="text.secondary">Time Slot: {data?.timeSlot?.time}</Typography>
                    </Box>

                </CardContent>
            </Card>
        </Box>
    )
}

export default PickupUserInfo