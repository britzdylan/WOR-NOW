import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    gallery: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '400px',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '300px',

        },

    },
    galleryImage: {
        width: '100px',
        margin: '4px 4px 0 0',
        padding: '0'
    },
    imageContainer: {
        overflow: 'hidden',
        width: '400px',
        height: '400px',
        maxWidth: "400px",
        maxHeight: '400px',
        [theme.breakpoints.down('xs')]: {
            width: "300px",
            height: "300px"
        },
    },
    images: {
        maxWidth: "100%",

    }
}));

const images = (props) => {
    const classes = useStyles();
    const { alt, url, gallery } = props

    return (
        <div className={classes.images}>
            <Paper elevation={0} className={classes.imageContainer}>
                <picture>
                    <source srcSet={url} type="image/webp" width="100%" height="100%" alt={alt} />
                    <source srcSet={url} type="image/jpeg" width="100%" height="100%" alt={alt} />
                    <img src={url} width="100%" alt={alt} />
                </picture>
            </Paper>
            {/* <div className={classes.gallery}>
                {gallery.length ? (
                    gallery.map(image => <Paper className={classes.galleryImage} elevation={0}>
                        <img src={image.sourceUrl} alt={alt} width="100%" />
                    </Paper>)
                ) : ''}
            </div> */}
        </div>
    )
}

export default images