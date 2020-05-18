import React from "react"
import { Typography } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';



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
      addToCart: {
          backgroundColor: "#D52626",
          color: "white",
          margin: '32px 0',
          '&:hover' : {
             color: "#D52626"
          }    
      },
      available: {
          color: "#19A85E",
          lineHeight: 0,
          display: 'flex',
          aligItems: 'center',
          margin: '12px 0',
      },
      avaialbeText: {
          margin: '0 6px'
      }
      
    
  }));


const Data = (props) => {
    const [size, setAge] = React.useState('');
    const [quantity, setQuantity] = React.useState(-1);

    const { title, salePrice, price, product, stockQuantity, simpleSku } = props

    const variationsReversed =  product.variations ? product.variations.nodes : '' ;
    const classes = useStyles();

    // available variable
    let available = undefined;
    

    // get the sale price
    const itemsTemp= [];
    itemsTemp.push(salePrice ? salePrice : '');

    // get the regular price
    const regPrice = itemsTemp[0].split(' ');

    //get the product sku

        let sku = undefined;
        if (quantity >= 0) {
            let temp = variationsReversed ? variationsReversed[quantity].sku : simpleSku;
            if (temp != null) {
                sku = variationsReversed ? variationsReversed[quantity].sku : simpleSku;
                
            }
            } else {
                sku = undefined
    
            }

    // ================
    
   //get the cooresponding quantity ascosiicated with the age
   let stock = undefined;
   if (quantity >= 0) {
        let temp = variationsReversed ? variationsReversed[quantity].stockQuantity : stockQuantity;
        if (temp != null || undefined) {
            stock = variationsReversed ? variationsReversed[quantity].stockQuantity : stockQuantity;
            if (stock > 0) {
                available = true
            }
        } else {
            stock = '0';
            available = false
        }
        } else {
        stock = undefined
        }
   

    // get the value of the selected size
    const handleChange = (event) => {
          setAge(event.target.value);
          setQuantity(event.target.value);  
      };
  
    return (
        <div>
            <Typography variant="h2" component="h1" className={classes.title}>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</Typography>
           {/* checks if the item is on sale if its not then it does not show anything */}
            {regPrice[2] ?   
            <Typography
            variant="p"
            component="p"
            color="primary"
            className={classes.regPrice}
            > 
            {regPrice[2]}
            </Typography>
        
            : null}   

                {/* show the price */}
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
                    <InputLabel id="select-your-size">Select your size</InputLabel>
                    <Select
                    labelId="select-your-size"
                    id="size-select"
                    value={size}
                    required
                    defaultValue={-1}
                    onChange={handleChange}
                    >
                        
                    {variationsReversed.length ? (
                        variationsReversed.map ( (item, index) =>  <MenuItem key={index}  value={index}>{item.attributes.nodes[0].value}</MenuItem> )
                    )  : <MenuItem key={1}  value={0}>{product.name}</MenuItem>}
                    </Select>
                </FormControl>
                {/* quantity view, hides the UI elements if there is no size selected  */}
                {available ? 
                <div className={classes.available}>
                    <ErrorIcon /> 
                    <Typography className={classes.avaialbeText} variant='subtitle1'>{stock}</Typography>
                
                    <Typography variant="subtitle1" >
                        Available Now
                    </Typography>
                </div>
                : null} 
            
            </div>
            {/* ===================== */}

            
            {/* ================ */}

            {/* quantity selector  */}
            <div className={classes.Selector}> 
                <Typography
                    variant="h5"
                    component="p"
                >
                    Select your Quantity
                </Typography>


                <FormControl className={classes.formControl}>
                    <InputLabel id="quantity-select">Select your Quantity</InputLabel>
                    <Input
                        labelId="quantity-select"
                        className={classes.input}
                        required
                        inputProps={{
                        step: 1,
                        min: 0,
                        max: stock,
                        type: 'number',
                        }}
                    />
                </FormControl>
                
            </div>
            {sku ? <Typography variant='subtitle2'>SKU: {sku}</Typography>: null}

            {/* ================= */}

            {/* add to cart button */}
            <Button className={classes.addToCart} color="primary" size="large">Add to Cart</Button>
        </div>
    )
}

export default Data