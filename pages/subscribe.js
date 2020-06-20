import React from 'react'
import Subscribe from '../components/homeSection/subscribe'
import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/homeSection/components/navTabs-home'
const SubscribePage = () => {

    return (
        <Layout>
            <NavTabs index="3" />
            <Subscribe />
        </Layout>
    )
}

export default SubscribePage;