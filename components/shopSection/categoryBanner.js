import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '360px',
        height: "200px",
        margin: '8px',
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
    }
}));



const categoryBanner = (props) => {
    const classes = useStyles();
    const { banner, slug, filter, sale, parent, parentID } = props;

    return (
        <Link href={{ pathname: `/shop/category/${parent}/${slug}/view`, query: { pageName: ``, page: `1`, curCursor: ``, field: `${filter}`, sale: `${sale}`, parentID: `${parentID}` } }}>
            <Button>
                <Card style={{ backgroundImage: banner != undefined ? `url(/${banner}.jpg)` : `url(/placeholder-image.jpg)` }} className={classes.root} elevation='5'>
                </Card>
            </Button>
        </Link>
    )

}

export default categoryBanner