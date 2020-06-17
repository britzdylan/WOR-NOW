import React from 'react'
import Contact from '../components/homeSection/contact-us'
import Layout from '../components/mainLayout/layout'
import NavTabs from '../components/homeSection/components/navTabs-home'
const ContactUs = () => {

    return (
        <Layout>
            <NavTabs index="2" />
            <Contact />
        </Layout>

    )
}

export default ContactUs;