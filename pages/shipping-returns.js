import Layout from '../components/mainLayout/layout'
import { getShipping } from '../api'



const shipReturns = ({ result }) => {
    console.log(result);

    return (
        <Layout>
            <p>{result.simplePage.Value}</p>
        </Layout>
    )
}

export async function getStaticProps() {
    const result = await getShipping();
    return {
        props: {
            result
        }
    }
}

export default shipReturns;