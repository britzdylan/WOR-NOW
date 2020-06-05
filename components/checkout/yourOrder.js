import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { AppContext } from "../context/appContext";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';


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
  
  function createData(Image, product, qty, total ) {
    return { Image, product, qty, total};
  }

  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const YourOrder = (props) => {
    const classes = useStyles();
    const { value } = React.useContext(AppContext);
    const [ cart, setCart ] = value;

    const rows = cart.products.length ?  cart.products.map( (item, index) => createData(<img width="100px" alt={item.node.variation.name} src={`${item.node.product.image.sourceUrl}`} />, item.node.variation.name, item.node.quantity, item.node.total) ) : null

    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };


    return (

        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="left">Product</StyledTableCell>
                        <StyledTableCell align="left">Quantity</StyledTableCell>
                        <StyledTableCell align="left">Total</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.Image}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.product}</StyledTableCell>
                        <StyledTableCell align="left">{row.qty}</StyledTableCell>
                        <StyledTableCell align="left">{row.total}</StyledTableCell>
                        </StyledTableRow>
                    ))}

                    <StyledTableRow>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">Total Quantity</StyledTableCell>
                    <StyledTableCell align="left">{cart.productCount}</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    </StyledTableRow>


                    <StyledTableRow>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">SubTotal</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">{cart.subTotal}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                    <StyledTableCell align="left">

                                          <Switch
                              checked={state.checkedA}
                              onChange={handleChange}
                              name="checkedA"
                              inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                    </StyledTableCell>
                    <StyledTableCell align="left">Shipping</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">R 100.00</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">Total Tax</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">{cart.totalTax}</StyledTableCell>
                    </StyledTableRow>


                    <StyledTableRow>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">Total</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">{cart.total}</StyledTableCell>
                    </StyledTableRow>

                    

                    </TableBody>
                </Table>
                </TableContainer>
        </>
    )
}

export default YourOrder