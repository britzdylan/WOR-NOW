import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const useStyles = makeStyles((theme) => ({
    root: {
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
        },
        '& > *': {
            margin: theme.spacing(1),
            //width: '100%',

        },
    },
    formContainer: {
        padding: '12px',
        maxWidth: '30%',
        margin: '64px auto',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            maxWidth: '60%',
            margin: '32px auto'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            maxWidth: '100%',
        },
    },
    submit: {
        margin: '32px 0'
    },
    btnControl: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0',
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const subscribe = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <div className={classes.formContainer} >
            <Typography
                variant="h4"
                component="p"
                gutterBottom="true"
                align="center"
            >
                Subscribe for special offers
            </Typography>
            <Typography
                variant="body2"
                component="p"
                align="center"
            >
                We promise to keep your information secure
            </Typography>
            <Button className={classes.submit} variant="contained" size="large" color="primary" fullWidth="true" onClick={handleClickOpen}>Sign Up</Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Sign Up
                            </Typography>
                    </Toolbar>
                </AppBar>
                <Iframe url="https://visitor.r20.constantcontact.com/manage/optin?v=0015xyUykc-A357P1H_B5UZ6pgkKG2d8A0kbuBSZ30EK5HDY1HOD2ASZXufJnZ7hxiE22NM7LuyHEhU_bCV9q9-FWyYHZGx6A2B9pxNzDaQboY%3D"
                    width="100%"
                    height="100%"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </Dialog>
        </div>
    )
}

export default subscribe