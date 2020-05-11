import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
   root: {
        padding: 0,
        maxWidth: "75%",
        margin: '32px auto 64px auto',
        [theme.breakpoints.down('md')] : {
            maxWidth: '100%',
            margin: '24px auto',
          },
   },
   container: {
       textAlign: 'center'
   },
   button: {
   }
  }));


const subCatNav = (props) => {
  const classes = useStyles();
  const { title } = props;


    return (  
        <nav className={classes.root}>
            <div className={classes.container}>
                <Typography variant='h1' component='h1' >{title}</Typography>
            </div>
            <Button
                    size='small'
                     variant="outlined"
                     color="primary"
                     className={classes.button}
                    //  startIcon={<DeleteIcon />}
                >Back</Button>
        </nav>
    )}

export default subCatNav;

        