import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-oswald';
import '../style/styles.css';
import 'typeface-roboto';
import theme from '../src/theme';
import { AppContext } from "../components/context/appContext";



export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { value4 } = React.useContext(AppContext);
  const [product,setProduct] = React.useState("");
  React.useEffect(() => {
    setProduct(localStorage.getItem('productData'));
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const jsonLD = ( data ) => {
    const productData = data != "" ? JSON.parse(data)  : ""
    const price =  data != "" ? productData.regularPrice.replace('R','') : "";
    return {
      __html: productData != "" ?
      ` {
        "@context":"https://schema.org",
      "@type":"Product",
       "productID": "${productData.id}",
        "name":"${productData.name}",
        "description":"Get the ${product.name} for only R ${price} at WorldofRugby with nation wide shipping and fast and secure online shopping.",
        "url":"https://www.worldofrugby.co.za/shop/product/${productData.slug}?id=${productData.productId}&type=${productData.__typename}",
        "image":"${productData.image.sourceUrl}",
     "brand":"",
     "google_product_category" : "1110",
     "offers": [
       {
         "@type": "Offer",
         "price": "${price}",
        "priceCurrency": "ZAR",
         "itemCondition": "https://schema.org/NewCondition",
         "availability": "https://schema.org/InStock"
       }
      ]
   }` : ""
    };
    

  }

  return (
    <React.Fragment>
      <Head>
        <title>WorldofRugby</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"  rel="preload" rel="stylesheet"></link>

        {/* favicon */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta http-equiv="cache-control" content="max-age=43200" />
        <meta name="google-site-verification" content="KaBFEEM7SBm3hDtRv1iDVa_6EQkep4O-c1DBZjRxVTI" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLD(product)}
        />
        {/* favicon */}
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};