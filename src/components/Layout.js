import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import '../styles/global'

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO />
    <Navigation />
    {children}
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
