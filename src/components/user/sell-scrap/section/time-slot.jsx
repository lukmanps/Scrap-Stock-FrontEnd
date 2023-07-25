import React, { useState } from 'react'
import GlobalTheme from '../../../../Theme/GlobalTheme'
import {
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Button,
    Typography,
    ThemeProvider,
    Radio
} from '@mui/material';


const timeSlot = ['10 - 11 AM', '11 - 12 PM', '12 - 1 PM', '1 - 2 PM', '2 - 3 PM', '4 - 5 PM', '5 - 6 PM'];

const TimeSlote = (props) => {
    const {timeSlote} = props;

    const [time, setTime] = useState(0);

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    timeSlote(time);

    return (
        <ThemeProvider theme={GlobalTheme}>
            <Container maxWidth='xl'>
                <Grid container sx={{ marginBottom: '2rem' }}>
                    <Grid item>
                        <Typography variant='h4'>Select Your Time Slot</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    {timeSlot.map((timeOption) => (
                        <Grid item xs={5} md={3} key={timeOption}>
                            <Card sx={{ borderRadius: '15px' }}>
                                <CardContent>
                                    <Typography variant='h5' align='left'>
                                        {timeOption}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Radio
                                        onChange={handleChange}
                                        checked={time === timeOption}
                                        value={timeOption}
                                        name="time"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>

        </ThemeProvider>
    )
}

export default TimeSlote