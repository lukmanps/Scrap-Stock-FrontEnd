import React, { useState, useReducer } from 'react';
import SelectItems from './section/select-items';
import { useSelector } from 'react-redux';
import EnterDetails from './section/enter-details';
import toast, { Toaster } from 'react-hot-toast';
import TimeSlote from './section/time-slot';
import { Box, Stepper, Step, StepLabel, StepButton, Typography, Button, ThemeProvider, colors } from '@mui/material';
import GlobalTheme from '../../../Theme/GlobalTheme';
import submitPickupSchedule from '../../../APIs/user/submit-pickup-schedule';
import { useNavigate } from 'react-router-dom';

const steps = ['Select Scraps', 'Enter Details', 'Schedule Pickup'];

const SellScrap = () => {
  const [scrap, setScrap] = useState([]);
  const [formData, setFormData] = useState('');
  const [timeSlot, setTimeSlot] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});

  const [response, setResponse] = useState(''); //Store data from database after scheduling pickup.
  const navigate = useNavigate();

  const user = useSelector((state) => state.userInfo);

  const combinedData = {
    user: user.id,
    scrap: scrap,
    formData: formData,
    timeSlot: timeSlot
  }

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const totalSteps = () => {
    return steps.length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };


  //Selected Scrap State Management
  const handleSelectedItems = (data) => {
    setScrap(data);
    handleNext();
  }

  //Form Data State Management
  const handleFormData = (data) => {
    if (!data) {
      toast.error('Enter your Details');
    } else {
      setFormData(data);
      handleNext();
    }
  }

  //Time Slot State Management
  const handleTimeSlot = (date, time) => {
    setTimeSlot({
      date: date,
      time: time
    });
  }



  const schedulePickup = (e) => {
    e.preventDefault();
    if (combinedData.user && combinedData.scrap && combinedData.formData && combinedData.timeSlot) {
      submitPickupSchedule(combinedData)
        .then((response) => {
          if (response.status === false) {
            toast.error("Pickup couldn't Schedule")
          } else {
            toast.success("Pickup Scheduled");
            setResponse(response.response);
            navigate('/scheduled-pickup');
          }
        })
    } else {
      toast.error('Complete the steps to schedule pickup')
    }
  }

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Box sx={{ width: '100%' }}>
        <Toaster />
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button varient={'outlined'} onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography>

              {activeStep === 0 && (
                <Box mb={5}>
                  <SelectItems selectedData={handleSelectedItems} />
                </Box>
              )}

              {activeStep === 1 && (
                <Box mb={5}>
                  <EnterDetails formData={handleFormData} />
                </Box>
              )}

              {activeStep === 2 && (
                <div>
                  <Box>
                    <TimeSlote timeSlote={handleTimeSlot} />
                  </Box>

                </div>

              )}



              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  variant='contained'
                  color="secondary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Box mr={5}>
                  <Button variant='outlined' onClick={handleReset} sx={{ mt: '3px' }}>Reset</Button>
                </Box>

                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }} mt={1}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : '')}

                {activeStep === steps.length - 1 && (
                  <Button variant='contained' size='large' onClick={schedulePickup}>Schedule Pickup</Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default SellScrap