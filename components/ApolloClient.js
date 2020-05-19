import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from '../fragmentTypes';

import clientConfig from './../client-config';

const fragmentMatcher = new IntrospectionFragmentMatcher({
	introspectionQueryResultData
});

const client = new ApolloClient( {
    link: createHttpLink( {
        uri: clientConfig.graphqlUrl,
        fetch: fetch
        
    }),
    cache: new InMemoryCache({ fragmentMatcher })
    
});

export default client;