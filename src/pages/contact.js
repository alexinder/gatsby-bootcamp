import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>The Contact Page</h1>
            <p>Call us on 0772334674 today!</p>
            <p>Can also visit me at <a href="https://www.twitter.com">my twitter profile here!</a> </p>
        </Layout>

    )
}

export default ContactPage