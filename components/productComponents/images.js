import React from 'react'
import { makeStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
gallery: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
},
galleryImage: {
    width: '25%',
    margin: '24px 12px'
},
imageContainer: {
    width: '500px',
    height: '500px',
[theme.breakpoints.down('md')] : {
    width: "auto",
    height: "auto"
      }, 
}
}));

const images =(props) => {
    const classes = useStyles();
    const { alt, url, gallery } = props

    return (
        <div  className={classes.images}>
                    <Paper variant="outlined" elevation={8} className={classes.imageContainer}>
                        <img src={url} width="100%" height="100%" alt={alt} />
                    </Paper>
                    <div className={classes.gallery}>
                    {gallery.length ? (
                        gallery.map( image => <Paper variant="outlined" className={classes.galleryImage} elevation={1}>
                            <img src={image.sourceUrl} alt={alt} width="100%" />
                        </Paper>)
                    )  : ''}
                    </div>
        </div>
    )
}

export default images