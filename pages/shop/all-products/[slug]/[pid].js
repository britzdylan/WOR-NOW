import React from 'react'
import client from '../../../../components/ApolloClient';
import CategoryVieComponenet from '../../../../components/global/categorie-view'
import PRODUCT_QUERY from '../../../../queries/GET_CATEGORY_PRODUCTS'
import { useRouter } from 'next/router'
import Layout from '../../../../components/mainLayout/layout'



const categoryView = (props) => {
    const router = useRouter()
    const { products, arrayCursor, hasNextPage, curPage, hasPreviousPage } = props
    const { slug } = router.query
    const { field } = router.query
    const { sale } = router.query


    return (
      <Layout>
                <CategoryVieComponenet sale={sale} field={field} slug={slug} pageName={slug} hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} products={products} arrayCursor={arrayCursor} curPage={curPage} />

      </Layout>

    )
}

categoryView.getInitialProps = async function (context) {

    let { query: { curCursor, page, field, sale }  } = context;
    const next = curCursor;
    const i = page
    const filter = field
    const Onsale = JSON.parse(sale)
    const result = await client.query( { query:PRODUCT_QUERY,variables: { next, filter, Onsale } });

    return{
      products: result.data.products.edges,
      arrayCursor: result.data.products.edges,
      hasNextPage: result.data.products.pageInfo.hasNextPage,
      hasPreviousPage: result.data.products.pageInfo.hasPreviousPage,
      curPage: i
    }
  }

export default categoryView