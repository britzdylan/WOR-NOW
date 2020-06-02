import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    root: {
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridColumnGap: "32px",
        justifyContent: "center",
        alignItems: "start",
        padding: '12px',
        maxWidth: '60%',
        margin: '64px auto',
        [theme.breakpoints.down('md')] : {
            height: 'auto',
            maxWidth: '80%',
            margin: '32px auto 128px auto',
            gridTemplateColumns: "50% 50%",
          },
          [theme.breakpoints.down('sm')] : {
            height: 'auto',
            maxWidth: '100%',
            gridTemplateColumns: "100%",
          },
      },
      field: {
        margin: '0 0 24px 0'
      },
      item : {
          padding: "24px",
          marginTop: "32px",
          height: "auto",
      },
      bold : {
          fontWeight: "700"
      }

}));


const BillingDetails = (props) => {
    const { fName,
        lName,
        email,
        Phone,
        company,
        address1,
        address2,
        city,
        country,
        state,
        postalcode } = props;
    const classes = useStyles();

    const [userCountry, setCountry] = React.useState('');
    const [province, setProvince] = React.useState('');
    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const handleProvince = (event) => {
        setProvince(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.item} >
                <Typography variant="overline" component="p">The following details will be used on the checkout page by default</Typography>
                <Typography variant="h2" gutterBottom="true" component="h1">Billing Details</Typography>
                <Typography gutterBottom="true" variant="p">First Name: <span className={classes.bold}>{fName ? fName : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Last Name: <span className={classes.bold}>{lName ? lName : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Email: <span className={classes.bold}>{email ? email : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Phone: <span className={classes.bold}>{Phone ? Phone : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Company: <span className={classes.bold}>{company ? company : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Address 1: <span className={classes.bold}>{address1 ? address1 : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Address 2: <span className={classes.bold}>{address2 ? address2 : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Postalcode: <span className={classes.bold}>{postalcode ? postalcode : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">State: <span className={classes.bold}>{state ? state : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">City: <span className={classes.bold}>{city ? city : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Country: <span className={classes.bold}>{country ? country : ""}</span></Typography>
            </Paper>
            <Paper elevation={0} className={classes.item}>
                <Typography gutterBottom="true" variant="h5">Complete this form to update your billing details </Typography>
                <TextField      className={classes.field} required  
                            error
                            id="fname"
                            helperText="Please enter your first name"
                            label="First name"
                            fullWidth
                            name="fname"
                            type='text'
                            variant="outlined" />
            <TextField      className={classes.field} required  
                            error
                            id="lname"
                            helperText="Please enter your last name"
                            label="Last name"
                            fullWidth
                            name="lname"
                            type='text'
                            variant="outlined" />
            <TextField     className={classes.field}    
                            error
                            id="cname"
                            helperText="Please enter your company name (optional)"
                            label="Company name"
                            fullWidth
                            name="cname"
                            type='text'
                            variant="outlined" />
            <InputLabel id="select-your-country">Select your Country</InputLabel>
             <Select  className={classes.field}
                    labelId="select-your-country"
                    id="country-select"
                    value={userCountry}
                    fullWidth
                    required
                    defaultValue={-1}
                    onChange={handleChange}
                    >
                        <MenuItem value="south-africa">South Africa</MenuItem>
                    
            </Select>
            <TextField     className={classes.field} required  
                            error
                            id="street"
                            helperText="Please enter your house number and street name"
                            label="Street Address"
                            fullWidth
                            name="street"
                            type='text'
                            variant="outlined" />
            <TextField     className={classes.field}   
                            error
                            id="suite"
                            helperText="Please enter your apartment number or suite (optional)"
                            label="Apartment Number"
                            fullWidth
                            name="suite"
                            type='text'
                            variant="outlined" />
            <TextField      className={classes.field} required
                            error
                            id="city"
                            helperText="Please enter your town/city"
                            label="Town/City"
                            fullWidth
                            name="city"
                            type='text'
                            variant="outlined" />
            <InputLabel id="select-your-province">Select your Province</InputLabel>
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
                            id="postalcode"
                            helperText="Please enter your postal code"
                            label="Postal Code"
                            fullWidth
                            name="postalcode"
                            type='text'
                            variant="outlined" />
            <TextField     className={classes.field}  required
                            error
                            id="phoneNumber"
                            helperText="Please enter your phone number"
                            label="Phone Number"
                            fullWidth
                            name="phoneNumber"
                            type='number'
                            variant="outlined" />
            <TextField     className={classes.field}  required
                            error
                            id="email"
                            helperText="Please enter your Email"
                            label="Email"
                            fullWidth
                            name="email"
                            type='email'
                            variant="outlined" />
                <Button variant="contained" color="primary" >Submit</Button>
            </Paper>
        </div>
    )
}

export default BillingDetails;