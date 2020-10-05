import React from 'react'
import Subscribe from '../../components/homeSection/subscribe'
import Layout from '../../components/mainLayout/layout'
import NavTabs from '../../components/homeSection/components/navTabs-home'

import { NextSeo } from 'next-seo';
const SubscribePage = () => {

    return (
        <Layout>
            <NextSeo
                title="Subscribe for special offers"
                description="Instantly save 15% on your first order when you sign up today!"
                canonical="https://www.worldofrugby.co.za"
                openGraph={{
                    title: "Subscribe for special offers",
                    description: "Instantly save 15% on your first order when you sign up today!",
                    images: ""
                }}
            />
            <NavTabs index="3" />
            <Subscribe />
        </Layout>
    )
}

export default SubscribePage;