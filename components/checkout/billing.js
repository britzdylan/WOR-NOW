import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    field: {
      margin: '0 0 24px 0'
    }
  }));


const Billing = (props) => {
    const classes = useStyles();
    const [country, setCountry] = React.useState('');
    const [province, setProvince] = React.useState('');
    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleProvince = (event) => {
        setProvince(event.target.value);
    };

    return (
        <>
            <Typography align="center" gutterBottom="true" variant="h4">Please enter your billing details</Typography>
            <TextField      className={classes.field} required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your first name"
                            label="first name"
                            fullWidth
                            name="fname"
                            type='text'
                            variant="outlined" />
            <TextField      className={classes.field} required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your last name"
                            label="last name"
                            fullWidth
                            name="lname"
                            type='text'
                            variant="outlined" />
            <TextField     className={classes.field}    
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your company name (optional)"
                            label="Company name"
                            fullWidth
                            name="cname"
                            type='text'
                            variant="outlined" />
            <InputLabel id="select-your-size">Select your Country</InputLabel>
             <Select  className={classes.field}
                    labelId="select-your-country"
                    id="country-select"
                    value={country}
                    fullWidth
                    required
                    defaultValue={-1}
                    onChange={handleChange}
                    >
                        <MenuItem value="south-africa">South Africa</MenuItem>
                    
            </Select>
            <TextField     className={classes.field} required  
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your house number and street name"
                            label="Street Address"
                            fullWidth
                            name="street"
                            type='text'
                            variant="outlined" />
            <TextField     className={classes.field}   
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your apartment number or suite (optional)"
                            label="Apartment Number"
                            fullWidth
                            name="suite"
                            type='text'
                            variant="outlined" />
            <TextField      className={classes.field} required
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your town/city"
                            label="Town/City"
                            fullWidth
                            name="city"
                            type='text'
                            variant="outlined" />
            <InputLabel id="select-your-size">Select your Province</InputLabel>
            <Select className={classes.field}
                    labelId="select-your-province"
                    id="province-select"
                    value={province}
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
            <TextField      className={classes.field} required
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your postal code"
                            label="Postal Code"
                            fullWidth
                            name="postalcode"
                            type='text'
                            variant="outlined" />
            <TextField     className={classes.field}  required
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your phone number"
                            label="Phone Number"
                            fullWidth
                            name="phoneNumber"
                            type='number'
                            variant="outlined" />
            <TextField     className={classes.field}  required
                            error
                            id="outlined-error-helper-text"
                            helperText="Please enter your Email"
                            label="Email"
                            fullWidth
                            name="email"
                            type='email'
                            variant="outlined" />
                            
        </>
    )
}

export default Billing