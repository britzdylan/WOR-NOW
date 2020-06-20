import React from 'react'
import Whyus from '../components/homeSection/why-us'
import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/homeSection/components/navTabs-home'
const whyUs = () => {

    return (
        <Layout>
            <NavTabs index="1" />
            <Whyus />
        </Layout>

    )
}

export default whyUs;