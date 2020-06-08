import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  field: {
    margin: '0 0 24px 0'
  }
}));


const Billing = (props) => {
  const classes = useStyles();

  const {
    handleCountry,
    handleProvince,
    handleaddress1,
    handleAddress2,
    handleCity,
    handleCompany,
    handleEmail,
    handleFistname,
    handleLastname,
    handlePhone,
    handlePostcode,
    newcountry,
    newprovince,
    AllBillingData
  } = props



  return (
    <>
      <Paper elevation={0} className={classes.item}>
        <Typography gutterBottom="true" variant="h5">Complete this form to update your billing details </Typography>
        <TextField className={classes.field} required
          error
          id="fname"
          helperText="Please enter your first name"
          label="First name"
          fullWidth
          value={AllBillingData[7]}
          name="fname"
          type='text'
          onChange={handleFistname}
          variant="outlined" />
        <TextField className={classes.field} required
          error
          id="lname"
          helperText="Please enter your last name"
          label="Last name"
          fullWidth
          value={AllBillingData[8]}
          name="lname"
          type='text'
          onChange={handleLastname}
          variant="outlined" />
        <TextField className={classes.field}
          error
          id="cname"
          helperText="Please enter your company name (optional)"
          label="Company name"
          fullWidth
          value={AllBillingData[5]}
          name="cname"
          type='text'
          onChange={handleCompany}
          variant="outlined" />
        <InputLabel id="select-your-country">Select your Country</InputLabel>
        <Select className={classes.field}
          labelId="select-your-country"
          id="country-select"
          value={AllBillingData[0]}
          fullWidth
          required
          defaultValue={-1}
          onChange={handleCountry}
        >
          <MenuItem value="ZA">South Africa</MenuItem>

        </Select>
        <TextField className={classes.field} required
          error
          id="street"
          helperText="Please enter your house number and street name"
          label="Street Address"
          fullWidth
          value={AllBillingData[2]}
          name="street"
          type='text'
          onChange={handleaddress1}
          variant="outlined" />
        <TextField className={classes.field}
          error
          id="suite"
          helperText="Please enter your apartment number or suite (optional)"
          label="Apartment Number"
          fullWidth
          value={AllBillingData[3]}
          name="suite"
          type='text'
          onChange={handleAddress2}
          variant="outlined" />
        <TextField className={classes.field} required
          error
          id="city"
          helperText="Please enter your town/city"
          label="Town/City"
          fullWidth
          value={AllBillingData[4]}
          name="city"
          onChange={handleCity}
          type='text'
          variant="outlined" />
        <InputLabel id="select-your-province">Select your Province</InputLabel>
        <Select className={classes.field}
          labelId="select-your-province"
          id="province-select"
          value={AllBillingData[1]}
          fullWidth
          required
          defaultValue={-1}
          onChange={handleProvince}
        >
          <MenuItem value="Gauteng">Gauteng</MenuItem>
          <MenuItem value="Limpopo">Limpopo</MenuItem>
          <MenuItem value="Northern-Cape">Northern-Cape</MenuItem>
          <MenuItem value="Western-Cape">Western-Cape</MenuItem>
          <MenuItem value="Eastern-Cape">Eastern-Cape</MenuItem>
          <MenuItem value="Bloemfontein">Bloemfontein</MenuItem>
          <MenuItem value="Kwazulu-Natal">Kwazulu-Natal</MenuItem>
          <MenuItem value="North-West">North-West</MenuItem>
          <MenuItem value="Mpumalanga">Mpumalanga</MenuItem>

        </Select>
        <TextField className={classes.field} required
          error
          id="postalcode"
          helperText="Please enter your postal code"
          label="Postal Code"
          fullWidth
          name="postalcode"
          type='text'
          value={AllBillingData[10]}
          onChange={handlePostcode}
          variant="outlined" />
        <TextField className={classes.field} required
          error
          id="phoneNumber"
          helperText="Please enter your phone number"
          label="Phone Number"
          fullWidth
          value={AllBillingData[9]}
          name="phoneNumber"
          type='number'
          onChange={handlePhone}
          variant="outlined" />
        <TextField className={classes.field} required
          error
          id="email"
          helperText="Please enter your Email"
          label="Email"
          fullWidth
          value={AllBillingData[6]}
          onChange={handleEmail}
          name="email"
          type='email'
          variant="outlined" />
      </Paper>
    </>

  )
}

export default Billing