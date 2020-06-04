import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Billing from './billing';
import Shipping from './shipping';
import { useState } from 'react';
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

      // forData handlers

      // use same details from billing check
      const [useSameABilling, setBool] = React.useState(false);

      

      //billing state
      const [billingcountry, setCountryBilling] = React.useState('');
      const [billingprovince, setProvinceBilling] = React.useState('');
      const [billingaddress1, setAddress1Billing] = React.useState('');
      const [billingaddress2, setAddress2Billing] = React.useState('');
      const [billingcity, setCityBilling] = React.useState('');
      const [billingcompany, setCompanyBilling] = React.useState('');
      const [billingemail, setEmailBilling] = React.useState('');
      const [billingfirstname, setFirstnameBilling] = React.useState('');
      const [billinglastname, setLastnameBilling] = React.useState('');
      const [billingphone, setPhoneBilling] = React.useState('');
      const [billingpostcode, setPostcodeBilling] = React.useState('');

      let AllBillingData = [
        billingcountry,
        billingprovince,
        billingaddress1,
        billingaddress2,
        billingcity,
        billingcompany,
        billingemail,
        billingfirstname,
        billinglastname,
        billingphone,
        billingpostcode
      ]

      const handleCountry = (event) => {
        setCountryBilling(event.target.value);
    };

    const handleProvince = (event) => {
        setProvinceBilling(event.target.value);
    };
    
    const handleaddress1 = (event) => {
        setAddress1Billing(event.target.value);
    }

    const handleAddress2 = (event) => {
        setAddress2Billing(event.target.value);
    }
    const handleCity = (event) => {
        setCityBilling(event.target.value);
    }
    const handleCompany = (event) => {
        setCompanyBilling(event.target.value);
    }
    const handleEmail = (event) => {
        setEmailBilling(event.target.value);
    }
    const handleFistname = (event) => {
        setFirstnameBilling(event.target.value);
    }
    const handleLastname = (event) => {
        setLastnameBilling(event.target.value);
    }
    const handlePhone = (event) => {
        setPhoneBilling(event.target.value);
    }
    const handlePostcode = (event) => {
        setPostcodeBilling(event.target.value);
    }

      //shipping state

      const [shippingcountry, setCountryShipping] = React.useState('');
      const [shippingprovince, setProvinceShipping] = React.useState('');
      const [shippingaddress1, setAddress1Shipping] = React.useState('');
      const [shippingaddress2, setAddress2Shipping] = React.useState('');
      const [shippingcity, setCityShipping] = React.useState('');
      const [shippingcompany, setCompanyShipping] = React.useState('');
      const [shippingfirstname, setFirstnameShipping] = React.useState('');
      const [shippinglastname, setLastnameShipping] = React.useState('');
      const [shippingphone, setPhoneShipping] = React.useState('');
      const [shippingpostcode, setPostcodeShipping] = React.useState('');
      const [orderNotes, setOrderNotes] = React.useState('');

      const [ requestError, setRequestError ] = useState( null );
      const [ifSuccessFull, setSuccess ] = useState(false);

      let AllShippingData = [
        shippingcountry,
        shippingprovince,
        shippingaddress1,
        shippingaddress2,
        shippingcity,
        shippingcompany,
        shippingfirstname,
        shippinglastname,
        shippingphone,
        shippingpostcode,
        orderNotes,
      ]

      const handleCountryShipping = (event) => {
        setCountryShipping(event.target.value);
      };

      const handleProvinceShipping = (event) => {
          setProvinceShipping(event.target.value);
      };
      
      const handleaddress1Shipping = (event) => {
          setAddress1Shipping(event.target.value);
      }

      const handleAddress2Shipping = (event) => {
          setAddress2Shipping(event.target.value);
      }
      const handleCityShipping = (event) => {
          setCityShipping(event.target.value);
      }
      const handleCompanyShipping = (event) => {
          setCompanyShipping(event.target.value);
      }
      const handleFistnameShipping = (event) => {
          setFirstnameShipping(event.target.value);
      }
      const handleLastnameShipping = (event) => {
          setLastnameShipping(event.target.value);
      }
      const handlePhoneShipping = (event) => {
          setPhoneShipping(event.target.value);
      }
      const handlePostcodeShipping = (event) => {
          setPostcodeShipping(event.target.value);
      }

      const hanldeOrderNotes = (event) => {
        setOrderNotes(event.target.value);
      }
      
     

      if (useSameABilling) {
        AllShippingData = AllBillingData
        //console.log(AllShippingData, useSameABilling);
       }
       console.log("billing data:", AllBillingData);
       console.log("shippingData", AllShippingData);
          function getStepContent(step) {
            switch (step) {
              case 0:
                return <Billing  
                handleCountry={handleCountry}
                handleProvince={handleProvince}
                handleaddress1={handleaddress1}
                handleAddress2={handleAddress2}
                handleCity={handleCity}
                handleCompany={handleCompany}
                handleEmail={handleEmail}
                handleFistname={handleFistname}
                handleLastname={handleLastname}
                handlePhone={handlePhone}
                newcountry={billingcountry}
                newprovince={billingprovince}
                handlePostcode={handlePostcode}/>;
              case 1:
                return <Shipping 
                handleCountryShipping={handleCountryShipping}
                handleProvinceShipping={handleProvinceShipping}
                handleaddress1Shipping={handleaddress1Shipping}
                handleAddress2Shipping={handleAddress2Shipping}
                handleCityShipping={handleCityShipping}
                handleCompanyShipping={handleCompanyShipping}
                handleFistnameShipping={handleFistnameShipping}
                handleLastnameShipping={handleLastnameShipping}
                handlePhoneShipping={handlePhoneShipping}
                handlePostcodeShipping={handlePostcodeShipping}
                hanldeOrderNotes={hanldeOrderNotes}
                shippingcountry={shippingcountry}
                shippingprovince={shippingprovince}
                useSameABilling={useSameABilling}
                setBool={setBool}
                />;
              case 2:
                return <OrderDetails />;
              default:
                return 'Unknown step';
            }
          }

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