import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"



const BlogPage = () => {
    return (
        <div>
            <Layout>
                <ul>
                    <Link to="/about">About</Link>
                </ul>
            </Layout>
        </div>
    )
}

export default BlogPage