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
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import toast, { Toaster } from 'react-hot-toast';
import GlobalTheme from '../../../../Theme/GlobalTheme';
import axios from '../../../../config/axios';

const SelectItems = (props) => {
  const {selectedData } = props;
  const [selectedItems, setSelectedItems] = useState({});
  const [scrap, setScrap] = useState([]);

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [name]: checked,
    }));
  };

  const handleNext = () => {
    const data = Object.keys(selectedItems).filter(key => selectedItems[key]);

    if (data.length === 0) {
      toast.error('Select scraps that you would like to sell!');
    } else {
      selectedData(data);
    }
  }

  useEffect(() => {
    axios.get('/scrap-management')
      .then((response) => {
        console.log(response.data, ": scrap materials")
        setScrap(response.data);
      })
      .catch((err) => {
        console.log(err, " : AXIOS Error");
      })
  }, [])

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Container maxWidth='xl'>
        <Toaster />
        <Grid container sx={{ marginBottom: '2rem' }}>
          <Grid item>
            <Typography variant='h4'>Select Scrap Items</Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: '1rem' }}><Typography variant='h5'>Paper</Typography></Box>

        <Grid container spacing={2}>
          {scrap.map((scrapItem) => (
            <Grid item xs={5} md={3} lg={2} width={'25rem'} key={scrapItem.scrap}>
              <Card sx={{ borderRadius: '15px' }}>
                <CardContent>
                  <Typography variant='h5' align='left'>
                    {scrapItem.scrap}
                  </Typography>
                  <Typography variant='body1'>{scrapItem.price}</Typography>
                </CardContent>
                <CardActions>
                  <Checkbox
                    name={scrapItem.scrap}
                    onChange={handleCheckBoxChange}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                  />
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
