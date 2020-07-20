import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

import { Link } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YY")
                    }
                }
            }
        }
        `)

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link 
                                to={`/blog/${edge.node.slug}`}> <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                            
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage