import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1> Welcome to the About Page</h1>
            <p> I am very new to React!</p>
            <p>Go ahead and contact me! <Link to="/contact">Click here to contact me </Link></p>
        </Layout>
        )
}

export default AboutPage