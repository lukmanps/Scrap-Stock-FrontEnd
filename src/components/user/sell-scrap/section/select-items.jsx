import React, { useState, useEffect } from 'react';
import {
  Card,
  Box,
  CardActions,
  CardContent,
  Container,
  Grid,
  Button,
  Typography,
  Checkbox,
  ThemeProvider,
  InputAdornment,
  TextField,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import toast, { Toaster } from 'react-hot-toast';
import GlobalTheme from '../../../../Theme/GlobalTheme';
import AdminTheme from '../../../../Theme/AdminTheme';
import fetchScrapItems from '../../../../APIs/user/fetchScraps';

const SelectItems = (props) => {
  const { selectedData } = props;
  const [selectedItems, setSelectedItems] = useState({});
  const [scrap, setScrap] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState(Array(scrap.length).fill(''));

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [name]: checked,
    }));
  };

  const handleTextfield = (index, value) => {
    setTextFieldValue((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleNext = () => {
    const data = Object.keys(selectedItems)
      .filter(key => selectedItems[key])
      .map(key => ({
        item: key,
        quantity: textFieldValue[scrap.findIndex(item => item._id === key)] || 0,
      }));

    if (data.length === 0) {
      toast.error('Select scraps that you would like to sell!');
    } else {
      selectedData(data);
    }
  }

  useEffect(() => {
    fetchScrapItems()
    .then((response) => {
      setScrap(response);
    })
    .catch((err) => {
      toast.error(err.message);
    })
  }, [])

  return (
    <ThemeProvider theme={AdminTheme}>
      <Container maxWidth='xl'>
        <Toaster />
        <Grid container sx={{ marginBottom: '2rem' }}>
          <Grid item>
            <Typography variant='h4'>Select Scrap Items</Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: '1rem' }}><Typography variant='h5'>Paper</Typography></Box>

        <Grid container spacing={2}>
          {scrap.map((scrapItem, index) => (
            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
              <Card sx={{ borderRadius: '15px' }}>
                <CardContent>
                  <Typography variant='h5' align='left'>
                    {scrapItem.scrap}
                  </Typography>
                  <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'space-between'}}>
                  <Checkbox
                    name={scrapItem._id}
                    onChange={handleCheckBoxChange}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                  />
                  <TextField
                    type='text'
                    size='small'
                    label='Qty'
                    value={textFieldValue[index]}
                    onChange={(event) => handleTextfield(index, event.target.value)}
                    sx={{width: '7rem'}}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  }} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container mt={3} justifyContent={'center'}>
          <Grid item>
            <Button variant={'contained'} onClick={handleNext} size='large' sx={{ width: '15rem' }}>Next</Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SelectItems;
