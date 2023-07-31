import React, { useState } from 'react';
import GlobalTheme from '../../../../Theme/GlobalTheme';
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
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const timeSlotOptions = [
    '10 - 11 AM',
    '11 - 12 PM',
    '12 - 1 PM',
    '1 - 2 PM',
    '2 - 3 PM',
    '4 - 5 PM',
    '5 - 6 PM'
];

const myDate = dayjs();
const dateString = myDate.format('DD-MM-YYYY');

const TimeSlote = (props) => {
    const { timeSlote } = props;
    const [time, setTime] = useState('');
    const [date, setDate] = useState(dayjs());

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    const myDate = date.format('DD-MM-YYYY');


    // Call the timeSlote function with the selected date and time
    React.useEffect(() => {
        timeSlote(myDate, time);
    }, [time, date]);

    return (
        <ThemeProvider theme={GlobalTheme}>
            <Container maxWidth="xl">
                <Grid container sx={{ marginBottom: '2rem' }}>
                    <Grid item>
                        <Typography variant="h4">Select Your Time Slot</Typography>
                    </Grid>
                </Grid>

                <Grid container mb={3}>
                    <Grid item xs={12} md={4} lg={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    value={date}
                                    onChange={(newDate) => setDate(newDate)}
                                    disablePast
                                    views={['day', 'month']}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    {timeSlotOptions.map((timeOption) => (
                        <Grid item xs={5} md={3} key={timeOption}>
                            <Card sx={{ borderRadius: '15px' }}>
                                <CardContent>
                                    <Typography variant="h5" align="left">
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
    );
};

export default TimeSlote;
