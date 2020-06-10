import Layout from '../components/mainLayout/layout'
import { getPayments } from '../api'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "40%",
        margin: "32px auto 128px auto",
        [theme.breakpoints.down('md')]: {
            maxWidth: '60%',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '70%',
        },
    },
}));


const payments = ({ result }) => {
    const classes = useStyles();
    const input = result.simplePage.Value;
    return (
        <Layout>
            <div className={classes.root}>
                <ReactMarkdown source={input} />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const result = await getPayments();
    return {
        props: {
            result
        }
    }
}

export default payments;