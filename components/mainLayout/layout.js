import MobilenNav from './mobileNav';
import Header from './header';
import Footer from './footer';
import { initGA, logPageView } from "../googleAnalytics"
import React, { useEffect } from 'react'
import { AppProvider } from '../context/appContext'
import client from "../ApolloClient";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';


const Layout = (props) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
      })
    
    return (
        <AppProvider>
            <ApolloProvider client={client}>
                <ApolloHooksProvider client={client}>
                    <div>
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