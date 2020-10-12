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
    const { data, parent } = props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {data.length ? (
                data.map((item, index) => <CategoryBanner key={index} name={item.node.name} banner={item.node.slug} slug={item.node.slug} filter={"DATE"} sale={false} parent={parent} parentID={item.node.productCategoryId} />)
            ) : null}
        </div>
    )
}

export default CatGrid