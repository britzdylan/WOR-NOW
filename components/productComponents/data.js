import React from "react"
import { Typography } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: '0px',
        lineHeight: '1.5',
        fontSize: '2.2rem'
    },
   
    regPrice: {
      textDecoration: 'line-through',
      color: 'grey',
  
    },
    price: {
        fontWeight: '700',
      [theme.breakpoints.down('sm')] : {
          fontSize: 16,
          marginBottom: '0px',
          
        },
    },
    Selector : {
        margin: "32px 0"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '30%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    
  }));


const Data = (props) => {
    const [age, setAge] = React.useState('');

    const { title, salePrice, price, variations } = props
    const variationsReversed =  variations.reverse()
    const classes = useStyles();

    const itemsTemp= [];
    itemsTemp.push(salePrice ? salePrice : '');
    const regPrice = itemsTemp[0].split(' ');

    const handleChange = (event) => {
        setAge(event.target.value); 
      };
      const varQuantities = [];

      varQuantities.push( variationsReversed.length ? (
        variationsReversed.map ( item =>  item.stockQuantity )
        )  : '')

        let sizeId = [];

        sizeId.push( variationsReversed.length ? (
            variationsReversed.map ( item =>   item.attributes.nodes[0].id)
        )  : '')

    return (
        <div>
            <Typography variant="h2" component="h1" className={classes.title}>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</Typography>
            {regPrice[2] ?   
            <Typography
            variant="p"
            component="p"
            color="primary"
            className={classes.regPrice}
            > 
            {regPrice[2]}
            </Typography>
        
            : ''}     
            <Typography
                variant="h3"
                component="p"
                color="primary"
                className={classes.price}
            >
                {price}
            </Typography>

            {/* size slector */}

            <div className={classes.Selector}> 
                <Typography
                    variant="h5"
                    component="p"
                >
                    Select your Size
                </Typography>


                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Select your size</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                        
                    {variationsReversed.length ? (
                        variationsReversed.map ( item =>  <MenuItem key={item}  value={item.attributes.nodes[0].id}>{item.attributes.nodes[0].value}</MenuItem> )
                    )  : ''}
                    </Select>
                </FormControl>
            </div>

            {/* quantity selector */}
            <div className={classes.Selector}> 
                <Typography
                    variant="h5"
                    component="p"
                >
                    Select your Quantity
                </Typography>


                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Select your Quantity</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                        
           
                    </Select>
                </FormControl>
            </div>

            {/* ================= */}
        
        </div>
    )
}

export default Data