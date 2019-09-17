import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={'foo'} title={'Leo Yockey'}>
        <SEO title="Leo Yockey" />
        <Bio />
        <Link style={{ boxShadow: `none` }} to={'/blog'}>
          blog
        </Link>
      </Layout>
    )
  }
}

export default BlogIndex

