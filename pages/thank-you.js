import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/mainLayout/layout';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "32px 0 64px 0"
    },
    paper: {
        height: '80%',
        width: "30%",
        padding: "12px 16px",
        backgroundColor: "#D52626",
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            height: '80%',
            width: '40%',
            margin: '32px auto'
        },
        [theme.breakpoints.down('sm')]: {
            height: '60%',
            width: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            height: "80%",
            width: '90%',
        },
    },
    typeWhite: {
        color: "white",
    },
    social: {
        width: "100%",
        textAlign: "center",
    }
}));

const thankYou = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography className={classes.typeWhite} align="center" gutterBottom="true" variant="h1">Thank You.</Typography>
                    <Typography className={classes.typeWhite} align="center" gutterBottom="true" variant="h5">Please check you email inbox for the order details. It's a pleasure doing business with you!</Typography>
                    <Typography className={classes.typeWhite} align="center" gutterBottom="true" variant="body1">If you have any enquiries regarding your order pleas email us at orders@sportprosa.co.za</Typography>
                    <div className={classes.social}>
                        <Typography className={classes.typeWhite} variant="subtitle2">Connect with us</Typography>
                        <a href="https://www.facebook.com/worldofrugbysa/" target="_blank"><Button><FacebookIcon className={classes.typeWhite} /></Button></a>
                        <a href="https://www.instagram.com/worldofrugby_sa/" target="_blank"><Button><InstagramIcon className={classes.typeWhite} /></Button></a>
                    </div>
                </Paper>
            </div>
        </Layout>

    )
}

export default thankYou;