import MobilenNav from './mobileNav';
import Header from './header';
import Footer from './footer';

import { AppProvider } from '../context/appContext'
import client from "../ApolloClient";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';


const Layout = (props) => {
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