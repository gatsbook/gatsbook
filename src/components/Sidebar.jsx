import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import data from '../../sidebar'
import { SidebarVisibleContext } from '../components/Layout'

const hide = css`
  width: 0;
  padding-left: 0;
`

const Container = styled.div`
  transition: 0.5s;
  ${tw('bg-grey-lighter pt-8 flex overflow-hidden')};
  /* mobile */
  ${tw('w-4/5 fixed min-h-full pl-8 z-10')};
  /* desktop */
  ${tw('lg:w-1/4 lg:static lg:justify-center')};
  ${props => !props.isVisible && hide};
`

const StyledLink = styled(Link)`
  ${tw('no-underline text-black')};
`

const List = styled.ul`
  ${tw('list-reset m-0')};
`

const Item = ({ title, slug, head }) => (
  <StyledLink to={`/docs${slug}`}>
    <li
      className={css`
        margin-left: ${head ? '0px' : '20px'};
        ${tw('py-2')};
      `}
    >
      {title}
    </li>
  </StyledLink>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  head: PropTypes.bool,
}

Item.defaultProps = {
  head: false,
}

const Overlay = styled.div`
  transition: 0.5s;
  ${tw('bg-black fixed h-full w-full')};
  right: 0;
  ${tw('lg:hidden')};
  opacity: ${props => (props.isVisible ? 0.1 : 0.0)};
  ${props => !props.isVisible && 'visibility: hidden'};
`

const Sidebar = ({ isVisible, toggle }) => (
  <React.Fragment>
    <Container isVisible={isVisible}>
      <List>{data.map(({ title, slug, head }) => <Item key={slug} title={title} slug={slug} head={head} />)}</List>
    </Container>
    <Overlay isVisible={isVisible} onClick={toggle} />
  </React.Fragment>
)
Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}

const SidebarWithContext = () => (
  <SidebarVisibleContext.Consumer>
    {({ on, toggle }) => <Sidebar isVisible={on} toggle={toggle} />}
  </SidebarVisibleContext.Consumer>
)

export default SidebarWithContext
