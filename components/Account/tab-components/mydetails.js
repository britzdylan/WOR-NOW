import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    root: {
        // display: "grid",
        // gridTemplateColumns: "50% 50%",
        // gridColumnGap: "32px",
        // justifyContent: "center",
        // alignItems: "start",
        padding: '12px',
        maxWidth: '500px',
        margin: '64px auto',
        [theme.breakpoints.down('md')] : {
            height: 'auto',
            maxWidth: '400px',
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


const MyDetails = (props) => {
    const { fName, lName, uName, email } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.item} >
                <Typography variant="overline" component="p">The following details will be used on the checkout page by default</Typography>
                <Typography variant="h2" gutterBottom="true" component="h1">Your Details</Typography>
                <Typography gutterBottom="true" variant="p">First Name: <span className={classes.bold}>{fName ? fName : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Last Name: <span className={classes.bold}>{lName ? lName : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Email: <span className={classes.bold}>{email ? email : ""}</span></Typography>
                <Divider/>
                <Typography gutterBottom="true" variant="p">Username: <span className={classes.bold}>{uName ? uName : ""}</span></Typography>
            </Paper>
            {/* <Paper elevation={0} className={classes.item}>
                <Typography gutterBottom="true" variant="h5">Complete this form to update your details </Typography>
                <TextField      className={classes.field} required  
                                error
                                id="fname"
                                helperText="Please enter your first name"
                                label="First name"
                                fullWidth
                                name="fname"        
                                variant="outlined" />
                <TextField      className={classes.field} required  
                                error
                                id="lname"
                                helperText="Please enter your last name"
                                label="Last name"
                                fullWidth
                                name="lname"        
                                variant="outlined" />
                <TextField      className={classes.field} required  
                                error
                                type="email"
                                id="email"
                                helperText="Please enter your email"
                                label="Email"
                                fullWidth
                                name="email"        
                                variant="outlined" />
                <TextField      className={classes.field} required  
                                error
                                type="text"
                                id="uname"
                                helperText="Please enter your username"
                                label="Username"
                                fullWidth
                                name="uname"        
                                variant="outlined" />
                <Button variant="contained" color="primary" >Submit</Button>
            </Paper> */}
        </div>
    )
}

export default MyDetails;