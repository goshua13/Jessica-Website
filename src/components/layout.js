/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      cosmicjsGlobals(slug: { eq: "header" }) {
        metadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.cosmicjsGlobals.metadata.title} />
      <div>
        <main>{children}</main>
        <footer className='container-fluid p-4'>
          {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://goshua13.github.io/Portfolio2/#/">Goshua13</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
