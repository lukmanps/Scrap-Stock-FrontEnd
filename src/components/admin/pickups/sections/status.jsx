import {
  Box,
  Card,
  CardActions,
  CardContent,
  Radio,
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Button
} from '@mui/material'
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PickupStatus = (props) => {
  const { handleStatus, status } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleUpdate = () => {
    if(value === 'Pickedup'){
      toast.success('Scrap Pickedup');
      handleStatus(value);
    } else if(value === 'Scheduled'){
      toast.success('Scrap Pickup Scheduled');
      handleStatus(value);
    } else if(value === 'Cancelled'){
      toast.error('Scrap Pickup Rejected');
      handleStatus(value);
    } 
 
  }

  return (
    <Box>
      <Toaster />
      <Card>
        <CardContent>
          <Typography variant='h6'>Status: {status}</Typography>
        </CardContent>
        <CardActions>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {status === 'Scheduled' && (
                <>
                  <FormControlLabel value="Cancelled" control={<Radio />} label="Cancel" disabled />
                  <FormControlLabel value="Pickedup" control={<Radio />} label="Pickup" />
                </>

              )}
              {status === 'Cancelled' && (
                <>
                  <FormControlLabel value="Pickedup" control={<Radio />} label="Pickup" disabled />
                </>
              )}
              {status === 'Pickedup' && (
                <>
                  <FormControlLabel value="Scheduled" control={<Radio />} label="Schedule" disabled />
                  <FormControlLabel value="Cancelled" control={<Radio />} label="Cancel" disabled />
                  <FormControlLabel value="Pickedup" control={<Radio />} label="Pickup" disabled />
                </>
              )}

              {status === 'Pending' && (
                <>
                  <FormControlLabel value="Scheduled" control={<Radio />} label="Schedule" />
                  <FormControlLabel value="Cancelled" control={<Radio />} label="Cancel" />
                  <FormControlLabel value="Pickedup" control={<Radio />} label="Pickup" />
                </>
              )}
              
            </RadioGroup>
          </FormControl>
        </CardActions>
        <CardActions>
          <Box justifyContent={'center'}>
            <Button variant='contained' onClick={handleUpdate}>Update</Button>
          </Box>

        </CardActions>
      </Card>
    </Box>
  )
}

export default PickupStatus