import React from 'react'
import Contact from '../components/homeSection/contact-us'
import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/homeSection/components/navTabs-home'
import { NextSeo } from 'next-seo';
const ContactUs = () => {

    return (
        <Layout>
            <NextSeo
                title="Need to get a hold of us"
                description="Need to get a hold of us? got any questions or reccomendations for us? fill out this form and we will get back to you asap."
                canonical="https://www.worldofrugby.co.za"
                openGraph={{
                    title: "Need to get a hold of us",
                    description: "Need to get a hold of us? got any questions or reccomendations for us? fill out this form and we will get back to you asap.",
                    images: ""
                }}
            />
            <NavTabs index="2" />
            <Contact />
        </Layout>

    )
}

export default ContactUs;