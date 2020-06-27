import React from 'react'
import Whyus from '../components/homeSection/why-us'
import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/homeSection/components/navTabs-home'
import { NextSeo } from 'next-seo';
const whyUs = () => {

    return (
        <Layout>
            <NextSeo
                title="Why shop with us - #everythingrugby"
                description="Our mission Is to bring you the best online rugby retail experience"
                canonical="https://www.worldofrugby.co.za"
                openGraph={{
                    title: "Why shop with us - #everythingrugby",
                    description: "Our mission Is to bring you the best online rugby retail experience",
                    images: ""
                }}
            />
            <NavTabs index="1" />
            <Whyus />
        </Layout>

    )
}

export default whyUs;