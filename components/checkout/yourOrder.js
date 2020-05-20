import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
  
  function createData(Image, product, total ) {
    return { Image, product, total};
  }

  const rows = [
    createData(<img height="100px" width="100px" src="https://www.sportprosa.co.za/wp-content/uploads/2020/05/1142474_0.jpg" />,'Product Name', "R 300.00"),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const YourOrder = (props) => {
    const classes = useStyles();


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
                        <StyledTableCell align="left">{row.total}</StyledTableCell>
                        </StyledTableRow>
                    ))}


                    <StyledTableRow>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">SubTotal</StyledTableCell>
                    <StyledTableCell align="left">R 300.00</StyledTableCell>
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
                    <StyledTableCell align="left">R 100.00</StyledTableCell>
                    </StyledTableRow>


                    <StyledTableRow>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left">Total</StyledTableCell>
                    <StyledTableCell align="left">R 400.00</StyledTableCell>
                    </StyledTableRow>

                    

                    </TableBody>
                </Table>
                </TableContainer>
        </>
    )
}

export default YourOrder