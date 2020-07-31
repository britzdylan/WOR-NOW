import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '360px',
        margin: '24px',
    },
    root: {
        width: '360px',
        height: "200px",
        // margin: '8px',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            height: "168px"
        },
        [theme.breakpoints.down('xs')]: {
            width: '360px',
            height: "168px"
        },
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        maxWidth: "100px",
        margin: "16px 0"
    }
}));



const categoryBanner = (props) => {
    const classes = useStyles();
    const { banner, slug, filter, sale, parent, parentID, name } = props;

    return (
        <div className={classes.container}>
            <Link href={{ pathname: `/shop/${parent}/${slug}`, query: { pageName: ``, page: `1`, curCursor: ``, field: `${filter}`, sale: `${sale}`, parentID: `${parentID}` } }}>
                <Button>
                    <Card style={{ backgroundImage: `url(/category-images/${banner}.jpg)` }} square={true} className={classes.root} elevation='5'>
                    </Card>
                </Button>
            </Link>
            <div className={classes.content}>
                <Typography align="center" variant="subtitle1">{name}</Typography>
                <Link href={{ pathname: `/shop/${parent}/${slug}`, query: { pageName: ``, page: `1`, curCursor: ``, field: `${filter}`, sale: `${sale}`, parentID: `${parentID}` } }} as={`/shop/${parent}/${slug}`}>
                    <Button size="medium" className={classes.btn} variant="outlined">Browse</Button>
                </Link>
            </div>
        </div >
    )

}

export default categoryBanner