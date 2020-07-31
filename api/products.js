import PRODUCT_QUERY from "../queries/GET_PRODUCT_SLUGS";
import client from '../components/ApolloClient';


export async function getProductsSlugs() {
    return await client.query({ query: PRODUCT_QUERY });
}