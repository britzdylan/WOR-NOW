import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  payments: {
    padding: "12px",
    margin: "24px 0",
  },
}));

const OrderDetails = (props) => {
  const { setPaymentMethod, paymentMethod } = props;
  const classes = useStyles();

  return (
    <>
      <FormControl component="fieldset" className={classes.payments}>
        <FormLabel component="legend">Payment Methods</FormLabel>
        <RadioGroup
          aria-label="payments"
          name="payments1"
          value={paymentMethod}
          onChange={setPaymentMethod}
        >
          <FormControlLabel
            value="walletdoc"
            control={<Radio />}
            label="Walletdoc"
          />
          <FormControlLabel
            value="payfast"
            control={<Radio />}
            label="Payfast & Mobicred Payment"
          />
          <FormControlLabel
            value="bacs"
            control={<Radio />}
            label="Direct Bank Transfer - EFT"
          />
        </RadioGroup>
      </FormControl>
      <Typography>
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </Typography>{" "}
    </>
  );
};

export default OrderDetails;
