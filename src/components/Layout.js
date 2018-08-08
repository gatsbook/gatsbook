import React from 'react'
import PropTypes from 'prop-types'
import { Toggle } from 'react-powerplug'
import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import '../styles/global'

export const SidebarVisibleContext = React.createContext({
  on: false,
  toggle: () => {},
})

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO />
    <Toggle>
      {({ on, toggle }) => (
        <SidebarVisibleContext.Provider
          value={{
            on,
            toggle,
          }}
        >
          <Navigation />
          {children}
        </SidebarVisibleContext.Provider>
      )}
    </Toggle>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
