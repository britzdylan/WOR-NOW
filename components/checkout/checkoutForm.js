import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { AppContext } from "../context/appContext";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Billing from './billing';
import Shipping from './shipping';
import { useState, useEffect } from 'react';
import OrderDetails from './order-details';
import CHECKOUT_MUTATION from '../mutations/checkout';
import GET_CART from '../../queries/GET_CART';
import { getFormattedCart, createCheckoutData } from '../../functions';



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
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
      [theme.breakpoints.down('sm')]: {
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

function checkValue(item) {
  return item != '';
}






const CheckoutForm = (props) => {


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderData, setOrderData] = useState(null);
  const { value } = React.useContext(AppContext);
  const [cart, setCart] = value;
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [shippingMethod, setShippingMethod] = React.useState('');
  const steps = getSteps();

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);

  }

  const handleShippingMethod = (event) => {
    setShippingMethod(event.target.value);

  }

  const handleNext = () => {
    if (activeStep === 0) {
      if (AllBillingDataToCheck.every(checkValue)) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        alert('please fill in the required fields')
      }
    }

    if (activeStep === 1) {
      if (AllShippingDataToCheck.every(checkValue)) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        alert('please fill in the required fields')
      }
    }

    if (activeStep === 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  // Get Cart Data.
  const { loading, error, data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);
      localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));
      // Update cart data in React Context.
      setCart(updatedCart);
    }
  });

  // Checkout or CreateOrder Mutation.
  const [checkout, { data: checkoutResponse, loading: checkoutLoading, error: checkoutError }] = useMutation(CHECKOUT_MUTATION, {
    variables: {
      input: orderData
    },
    onCompleted: (data) => {
      console.warn('completed CHECKOUT_MUTATION', data);
      refetch();
      window.open(data.checkout.redirect, '_blank');
      window.location.href = "/thank-you";
    },
    onError: (error) => {
      if (error) {
        setRequestError(error.graphQLErrors[0].message);
        console.log(error, checkoutResponse);
      }
    }
  });

  if (checkoutLoading) {
    console.log("loading..")
  }

  const handleCheckout = () => {
    const checkOutData = createCheckoutData(AllBillingData, AllShippingData, paymentMethod, shippingMethod);
    setOrderData(checkOutData);
    console.log(orderData);
    setRequestError(null);
  };

  useEffect(() => {

    if (null !== orderData) {
      // Call the checkout mutation when the value for orderData changes/updates.
      checkout();
    }

  }, [orderData]);

  // forData handlers

  // use same details from billing check
  const [useSameABilling, setBool] = React.useState(false);

  //billing state
  const [billingcountry, setCountryBilling] = React.useState('ZA');
  const [billingprovince, setProvinceBilling] = React.useState('Gauteng');
  const [billingaddress1, setAddress1Billing] = React.useState('123 Long Street');
  const [billingaddress2, setAddress2Billing] = React.useState('');
  const [billingcity, setCityBilling] = React.useState('Randburg');
  const [billingcompany, setCompanyBilling] = React.useState('');
  const [billingemail, setEmailBilling] = React.useState('britzdylan@gmail.com');
  const [billingfirstname, setFirstnameBilling] = React.useState('Dylan');
  const [billinglastname, setLastnameBilling] = React.useState('Britz');
  const [billingphone, setPhoneBilling] = React.useState('0117813308');
  const [billingpostcode, setPostcodeBilling] = React.useState('2194');

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
    billingpostcode,
  ]

  let AllBillingDataToCheck = [
    billingcountry,
    billingprovince,
    billingaddress1,
    billingcity,
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

  const [requestError, setRequestError] = useState(null);
  const [ifSuccessFull, setSuccess] = useState(false);

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
    orderNotes
  ]

  let AllShippingDataToCheck = [
    shippingcountry,
    shippingprovince,
    shippingaddress1,
    shippingcity,
    shippingfirstname,
    shippinglastname,
    shippingphone,
    shippingpostcode
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
    AllShippingData = AllBillingData;
    AllShippingDataToCheck = AllBillingDataToCheck;
  }

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
          handlePostcode={handlePostcode}
          AllBillingData={AllBillingData} />;
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
        return <OrderDetails setPaymentMethod={handlePaymentMethod} handleShippingMethod={handleShippingMethod} paymentMethod={paymentMethod} shippingMethod={shippingMethod} />;
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
              All steps completed - you are ready to place your order.
            </Typography>
            <Button variant="contained"
              color="primary" onClick={handleCheckout} className={classes.button}>
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