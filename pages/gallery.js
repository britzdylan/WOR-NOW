import React from 'react'
import Layout from '../components/mainLayout/layout'
import Gallery from '../components/homeSection/gallery'
import NavTabs from '../components/homeSection/components/navTabs-home'
import { NextSeo } from 'next-seo';

const gallery = () => {

    return (
        <Layout>
            {/* <NextSeo
                title="Need to get a hold of us"
                description="Need to get a hold of us? got any questions or reccomendations for us? fill out this form and we will get back to you asap."
                canonical="https://www.worldofrugby.co.za"
                openGraph={{
                    title: "Need to get a hold of us",
                    description: "Need to get a hold of us? got any questions or reccomendations for us? fill out this form and we will get back to you asap.",
                    images: ""
                }}
            /> */}
            <NavTabs index="3" />
            <Gallery />
        </Layout>

    )
}

export default gallery;