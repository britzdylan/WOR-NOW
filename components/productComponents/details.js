import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        margin: '32px auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            margin: '24px 0',
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


const Details = (props) => {
    const classes = useStyles();
    const { description } = props;


    return (
        <div className={classes.root}>
            <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Product Description</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Delivery and Returns</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Delivery Cost: R150 or free for orders over R 800. Delivery is nation wide.
                        and can take upto 2-4 Business days, place orders before 12 pm for fastest delivery time.
                        Delivery is provided & fulfilled by Dawn Wing.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default Details;