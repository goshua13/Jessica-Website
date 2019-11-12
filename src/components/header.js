import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1550,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontWeight:  `300`
          }}
        >
          {siteTitle}
        </Link>
        
      </h1>
      {/* <ul style={{listStyleType: `none`, display: `flex`, flexFlow: `row `, float:  `right`}}>
        <li><Link to='/about'>
            work
          </Link></li>
          <li><Link to='/about'>
            about
          </Link></li>
          <li><Link to='/about'>
            about
          </Link></li>
        </ul> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
