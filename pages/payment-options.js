import Layout from '../components/mainLayout/layout';
// import { getPayments } from '../api';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '40%',
    margin: '32px auto 128px auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
    },
  },
}));

const payments = ({}) => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <h1 id='82dbe7c2-78c6-41bc-95b3-9c6f68f3480b' class=''>
          Frequent payment questions
        </h1>
        <p id='5bf3f387-2191-46c0-8364-64969a363e09' class=''>
          <strong>In brief:</strong>
        </p>
        <ul id='35625874-fc50-4855-9ccf-d23f80804cd8' class='bulleted-list'>
          <li>
            <strong>Most common cards are accepted</strong>
          </li>
        </ul>
        <ul id='2bb711ae-6e1f-47d6-ae83-2c7b9afe2747' class='bulleted-list'>
          <li>
            <strong>
              If your bank account isn’t in Rands, your bank will do a
              conversion
            </strong>
          </li>
        </ul>
        <ul id='0a3ae282-4b1b-48cb-a6eb-9a11addf5324' class='bulleted-list'>
          <li>
            <strong>Our website is encrypted and safe to use</strong>
          </li>
        </ul>
        <ul id='99be558e-7ade-4d60-9088-f3797fa1d9a7' class='bulleted-list'>
          <li>
            <strong>
              We display prices with ZAR value-added tax or VAT at 15%
            </strong>
          </li>
        </ul>
        <h2 id='50b079df-0246-4533-ad2b-5b6040b78602' class=''>
          We are now a Mobicred Partner
        </h2>
        <ul id='91c92b6f-76c2-426c-a7d3-65c03b25640d' class='bulleted-list'>
          <li>
            <strong>
              Mobicred is a simple &amp; convenient credit facility that allows
              you to safely shop online with our participating retailers. Your
              Mobicred account allows you to make one single monthly payment for
              all your purchases with a revolving credit limit - allowing you to
              spend whatever you re-pay.
            </strong>
          </li>
        </ul>
        <p id='2e4b1e72-3c16-41ea-82a6-c6be87ec3a86' class=''>
          <strong>Which Cards or Services do you accept for payments?</strong>
        </p>
        <ul id='9ef214ad-3987-4c91-a89d-81691fc434c4' class='bulleted-list'>
          <li>
            <strong>
              We want checkout to be as smooth as possible for you! You can pay
              by Visa &amp; Mastercard securely with PayFast. We offer eft
              payments as well.
            </strong>
          </li>
        </ul>
        <p id='2faf1e38-800a-4fb4-8ec4-ba02d35da715' class=''>
          <strong>
            Is it safe to use my Personal &amp; Payment data on your website?
          </strong>
        </p>
        <p id='5921aa7f-3ec1-4bd8-81f8-255b8cfd2f45' class=''>
          <strong>
            If you prefer, we’d be very happy to take your order over the phone,
            just have a payment card ready.
          </strong>
        </p>
        <p id='575c560f-f5c3-471c-8b72-7e81710b9341' class=''>
          <strong>
            We also gladly accept payment via EFT, although we’ll be held up
            from sending your items until your payment clears. This usually
            takes two to three days.
          </strong>
        </p>
      </div>
    </Layout>
  );
};

export default payments;
