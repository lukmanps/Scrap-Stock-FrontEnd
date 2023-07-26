import React, { useState } from 'react';
import SelectItems from './section/select-items';
import { useSelector } from 'react-redux';
import EnterDetails from './section/enter-details';
import toast, { Toaster } from 'react-hot-toast';
import TimeSlote from './section/time-slot';
import { Box, Stepper, Step, StepLabel, StepButton, Typography, Button, ThemeProvider } from '@mui/material';
import GlobalTheme from '../../../Theme/GlobalTheme';
import submitPickupSchedule from '../../../APIs/user/submit-pickup-schedule';

const steps = ['Select Scraps', 'Enter Details', 'Schedule Pickup'];

const SellScrap = () => {
  const [scrap, setScrap] = useState([]);
  const [formData, setFormData] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const user = useSelector((state) => state.userInfo);

  const combinedData = {
    user: user.id,
    scrap : scrap,
    formData : formData,
    timeSlot: timeSlot
  }

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});

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
    // isLastStep() && !allStepsCompleted()
    //   ? // It's the last step, but not all steps have been completed,
    //   // find the first step that has been completed
    //   steps.findIndex((step, i) => !(i in completed))
    //   : 
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };


  //Data State
  const handleSelectedItems = (data) => {
    setScrap(data);
    console.log(data, "SELECTED");
    handleNext();
  }

  const handleFormData = (data) => {
    console.log(data);
    if(!data){
      toast.error('Enter your Details');
    } else{
      setFormData(data);
      handleNext();
    }
    
  }

  const handleTimeSlot = (time) => {
    setTimeSlot(time);
    console.log(time, ":: TIme slot in sell scrap");
  }



  const schedulePickup = (e) => {
    e.preventDefault();
    submitPickupSchedule(combinedData)
  }


  return (
    <ThemeProvider theme={GlobalTheme}>
      <Box sx={{ width: '100%' }}>
      <Toaster />
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="secondary" onClick={handleStep(index)}>
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
                  <Button variant='outlined' onClick={handleReset} sx={{mt:'3px'}}>Reset</Button>
                </Box>

                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }} mt={1}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : '')}

                {activeStep === steps.length-1 && (
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