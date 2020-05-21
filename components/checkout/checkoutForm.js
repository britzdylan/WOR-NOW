import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Billing from './billing';
import Shipping from './shipping';
import OrderDetails from './order-details';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      padding: '12px',
      margin: '32px auto',
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E8E8E8!important',
          },
          '&:hover fieldset': {
            borderColor: '#C4C4C4!important',
          },
          '&.Mui-focused fieldset': {
              borderColor: '#C4C4C4!important',
          },
          [theme.breakpoints.down('md')] : {
              maxWidth: '100%',
            },
            [theme.breakpoints.down('sm')] : {
              maxWidth: '100%',
            },
      },
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));


  function getSteps() {
    return ['Billing Details', 'Address', 'Payments'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Billing />;
      case 1:
        return <Shipping />;
      case 2:
        return <OrderDetails />;
      default:
        return 'Unknown step';
    }
  }


const CheckoutForm = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // };
    
      const handleReset = () => {
        setActiveStep(0);
      };

    return (

        <form className={classes.root} autoComplete="on">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you are ready to place your order
                </Typography>
                <Button variant="contained"
                    color="primary" onClick={handleReset} className={classes.button}>
                  Place my Order
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
      </form>
    )
}

export default CheckoutForm