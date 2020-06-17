import React from 'react'
import CategoryBanner from './categoryBanner'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        width: "80%",
        margin: "64px auto 128px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: "64px auto 128px auto",
        },
    }

}));

const CatGrid = (props) => {
    const { data } = props
    const classes = useStyles();
    console.log(data);

    return (
        <div className={classes.root}>
            {data.length ? (
                data.map((item, index) => <CategoryBanner key={index} banner={null} slug={null} filte={null} sale={null} parent={null} parentID={null} />)
            ) : null}
        </div>
    )
}

export default CatGrid