import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

    root: {
        padding: '12px',
        maxWidth: '60%',
        margin: '64px auto',
        [theme.breakpoints.down('md')] : {
            height: 'auto',
            maxWidth: '60%',
            margin: '32px auto'
          },
          [theme.breakpoints.down('sm')] : {
            height: 'auto',
            maxWidth: '100%',
          },
      }

}));


const MyDetails = (props) => {
    const { fName, lName, uName, email } = props;
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.root}>
            <Typography variant="overline" component="p">The following details will be used on the checkout page by default</Typography>
            <Typography variant="h2" gutterBottom="true" component="h1">Your Details</Typography>
            <Typography gutterBottom="true" variant="p">First Name: <Typography variant="subtitle1" >{fName ? fName : "-"}</Typography></Typography>
            <Divider/>
            <Typography gutterBottom="true" variant="p">Last Name: <Typography variant="subtitle1" >{lName ? lName : "-"}</Typography></Typography>
            <Divider/>
            <Typography gutterBottom="true" variant="p">Email: <Typography variant="subtitle1" >{email ? email : "-"}</Typography></Typography>
            <Divider/>
        <Typography gutterBottom="true" variant="p">Username: <Typography variant="subtitle1" >{uName ? uName : "-"}</Typography></Typography>
        </Paper>
    )
}

export default MyDetails;