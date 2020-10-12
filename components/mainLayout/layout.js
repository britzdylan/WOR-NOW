import MobilenNav from './mobileNav';
import Header from './header';
import Footer from './footer';
import { initGA, logPageView } from "../googleAnalytics"
import React, { useEffect } from 'react'
import { AppProvider } from '../context/appContext'
import client from "../ApolloClient";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import Pixel from '../Pixel'
import { useRouter } from 'next/router';


const Layout = (props) => {
    useEffect(() => {
        if (!isProduct) {
            localStorage.setItem('productData', "");
          }
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
      })
      const router = useRouter();
      const expr = router.pathname;
      const isProduct = expr.includes('/shop/product')
     
    
    return (
        <AppProvider>
            <ApolloProvider client={client}>
                <ApolloHooksProvider client={client}>
                    <div>
                        <Pixel name='FACEBOOK_PIXEL_1' />
                        <Header />
                        {props.children}
                        <MobilenNav />
                        <Footer />
                    </div>
                </ApolloHooksProvider>
            </ApolloProvider>
        </AppProvider>
    )
}

export default Layout;