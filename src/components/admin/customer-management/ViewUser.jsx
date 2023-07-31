import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from '../../../config/axios';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function UserCard() {
    const userId = useParams();

    const [user, setUser] = React.useState('');
    console.log(userId.id);

    React.useEffect(()=>{
        axios.get('/admin/view-user?id=' + userId.id)
            .then((response) => {
                console.log(response.data);
                setUser(response?.data);
            })
            .catch((err) => {
                console.log(err, " : Axios ERROR");
            })
    }, [])

    const card = (
          <Box mt={4}>
          <Box>
          <Typography variant='h4' fontWeight={600}>Customer Details</Typography>
          </Box>
          <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Customer ID: {user._id}
            </Typography>
            <Typography variant="h5" component="div"  sx={{ mb: 1.5 }}>
             Name: {user.username}
            </Typography>
            
            <Typography variant="body2">Email: {user.email}</Typography>
            <Typography variant="body2">Phone: {user.phoneNo}</Typography>
            <Typography variant="body2">Status: {user.status ? 'Unblocked' : 'Blocked'}</Typography>
            <Typography variant="body2">Wallet: {user.wallet}</Typography>
          </CardContent>
          </Card>
          </Box>
      );
    
  return (
    <Box sx={{ minWidth: '100vh' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}