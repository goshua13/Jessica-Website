import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    cosmicjsPages(slug: { eq: $slug }) {
      metadata {
        header
        content  
      }
    }
  }
`

export default ({ data }) => {
  const { content, header } = data.cosmicjsPages.metadata
  return (
    <Layout>
      <h1>{header} </h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}
