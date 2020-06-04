import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(Order, Date, Status, Total, Actions) {
    return { Order, Date, Status, Total, Actions };
  }
  
  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 300,
    },
    root: {
        padding: '12px',
        maxWidth: '60%',
        margin: '64px auto',
        [theme.breakpoints.down('md')] : {
            height: 'auto',
            maxWidth: '80%',
            margin: '32px auto 128px auto',
          },
          [theme.breakpoints.down('sm')] : {
            height: 'auto',
            maxWidth: '100%',
          },
      },
  }));





const OrderSummary = (props) => {

    const classes = useStyles();

    const { Orders } = props;

    const rows = Orders.length ? Orders.map(item => createData(item.node.orderNumber, item.node.date.slice(0,10), item.node.status, item.node.total, <Link href="#"><Button color="primary">View</Button></Link>)) : [];

    // const rows = [
    //     createData(item.node.orderNumber, item.node.date, item.node.status, item.node.total, <Link href="#"><Button>View</Button></Link>),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];

    return (
        <div className={classes.root}>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Order</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.Order}>
                <StyledTableCell align="center" component="th" scope="row">
                  #{row.Order}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Date}</StyledTableCell>
                <StyledTableCell align="center">{row.Status}</StyledTableCell>
                <StyledTableCell align="center">{row.Total}</StyledTableCell>
                <StyledTableCell align="center">{row.Actions}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
}

export default OrderSummary;