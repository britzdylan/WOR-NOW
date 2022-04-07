import Layout from '../components/mainLayout/layout';
// import { getShipping } from '../api'
import React from 'react';
// import ReactMarkdown from 'react-markdown';
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

const shipReturns = ({}) => {
  const classes = useStyles();
  //   const input = result.simplePage.Value;
  return (
    <Layout>
      <div className={classes.root}>
        <div class='page-body'>
          <h1 id='bbdb90c3-fc5e-401d-b886-403124e7091e' class=''>
            A guide to delivery
          </h1>
          <p id='864f7055-2786-4302-83ec-2785699a1fb7' class=''>
            <strong>
              We have a range of delivery options depending on how soon you’d
              like your order.
            </strong>
          </p>
          <h2 id='b2c1e13d-572b-474a-a149-708c81ef7ba7' class=''>
            See below for more details on delivery.
          </h2>
          <ul id='42fe64d1-3aae-4b06-b3f8-b69d10fb71d4' class='bulleted-list'>
            <li>
              <strong>Cost: R189 or free for orders over R 1200.</strong>
            </li>
          </ul>
          <ul id='5a22862c-836e-4ce9-a589-7f0816b574d0' class='bulleted-list'>
            <li>
              <strong>Delivery is nationwide. </strong>
            </li>
          </ul>
          <ul id='983c49fd-7dd6-453a-a326-78294fc1f528' class='bulleted-list'>
            <li>
              <strong>
                Delivery Time: 2-4 Business days, place orders before 2 pm for
                fastest delivery time.{' '}
              </strong>
            </li>
          </ul>
          <ul id='dfb337c0-c616-4b85-8534-55fe6cb981cb' class='bulleted-list'>
            <li>
              <strong>Delivery is provided by Dawn Wing.</strong>
            </li>
          </ul>
          <h2 id='0422f312-3ea8-463e-8ede-583866727393' class=''>
            Delivery outside of South Africa
          </h2>
          <p id='56c2364c-9f5e-45cb-81ba-8d6c07b3f6a1' class=''>
            <strong>
              There are additional charges for your shipment. Please contact us
              for a quote first before placing any orders. Delivery times vary
              throughout the world.
            </strong>
          </p>
          <p id='0d7e0dc3-c923-4614-b8b9-06340ccceeb7' class=''>
            <strong>
              Please be aware of any import taxes in your destination country,
              Sportpro South Africa is not responsible for any additional
              charges.
            </strong>
          </p>
          <p id='066426e6-171b-48fd-80b8-22d1ffd1a55a' class=''>
            <strong>
              Claims for missing parcels can only be started after 28 working
              days has passed.
            </strong>
          </p>
          <h2 id='29268d38-4b66-4f1a-a153-8240e04d1b71' class=''>
            Returns
          </h2>
          <p id='c6873d14-c063-4085-a7ed-2ac1dc64adcb' class=''>
            <strong>
              Returning a product can only be done within 28 days of purchase
              for a refund or exchange.
            </strong>
          </p>
          <p id='e75b9b28-a5ea-4f7c-9650-0146843daf18' class=''>
            <strong>For a successful return of a product:</strong>
          </p>
          <ul id='6663903f-7993-454a-aa4d-5b3000f8d4f1' class='bulleted-list'>
            <li>
              <strong>
                In most cases, phone us first and we will organize a pickup of
                the stock.{' '}
              </strong>
            </li>
          </ul>
          <ul id='f299e82c-824d-4aa0-b918-3eba71fc601c' class='bulleted-list'>
            <li>
              <strong>
                We can’t exchange goods if you’re outside South Africa, sorry!{' '}
              </strong>
            </li>
          </ul>
          <ul id='4fc6fa9e-e1a4-424c-bac1-88bbaa7d304d' class='bulleted-list'>
            <li>
              <strong>
                We’ll need the items in their original condition, along with any
                packaging and labels.{' '}
              </strong>
            </li>
          </ul>
          <ul id='bf7fd774-b4ba-4788-9b60-9be889846b8c' class='bulleted-list'>
            <li>
              <strong>
                Where WorldofRugby is at fault, an exchange of the product can
                be arranged at no cost to the customer.{' '}
              </strong>
            </li>
          </ul>
          <ul id='51e50f15-e617-4ac3-be19-c345d8c1efe0' class='bulleted-list'>
            <li>
              <strong>
                Should a customer be at fault in the order of a product, the
                customer will be held liable to pay delivery fees for an
                exchange of the product.{' '}
              </strong>
            </li>
          </ul>
          <ul id='0a50baad-1d11-4be4-bfe7-b37f271cb54f' class='bulleted-list'>
            <li>
              <strong>Faulty or defective items: </strong>
              <ul
                id='61e304f5-7fde-4e2b-b9dd-627b9d44b132'
                class='bulleted-list'>
                <li>
                  <strong>
                    You may return faulty goods for replacement, exchange or
                    refund up to 30 days after you receive them. After that
                    period, and up to six months, we’ll only be able to offer
                    you a replacement at a small discount.
                  </strong>
                </li>
              </ul>
            </li>
          </ul>
          <p id='2a2cc132-eae7-4d78-800a-0cc496e7006b' class=''>
            <strong>
              To qualify as faulty or defective, the item will meet one or more
              of the criteria:
            </strong>
          </p>
          <ul id='047dc88f-e426-4267-93dc-339438b1ab90' class='bulleted-list'>
            <li>
              <strong>
                Has a manufacturing fault beyond typical wear associated with
                the product{' '}
              </strong>
            </li>
          </ul>
          <ul id='12aa09e0-9fdf-4949-b113-6682f1f7c0ff' class='bulleted-list'>
            <li>
              <strong>
                Doesn’t match the descriptions or models shown to you at the
                time of purchase{' '}
              </strong>
            </li>
          </ul>
          <ul id='75d6dc8f-fba9-403f-ab46-3cfbf293aed6' class='bulleted-list'>
            <li>
              <strong>
                We’ll professionally evaluate returns for processing as soon as
                we can, but please make sure they’re clean and dry! We reserve
                the right to refuse to inspect items that are just too dirty or
                wet.
              </strong>
            </li>
          </ul>
          <p id='0f57bb6a-54bc-49e4-886f-475ba03a927f' class=''>
            <strong>
              For more information on our returns policy please read our full
              terms and conditions
            </strong>
          </p>
        </div>
      </div>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const res = await fetch('/shipping.md');
//   const result = await res.text();
//   return {
//     props: {
//       result,
//     },
//   };
// }

export default shipReturns;
