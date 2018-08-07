import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import data from '../../sidebar'

const Container = styled.div`
  ${tw('w-1/4 bg-grey-lighter flex pt-8 justify-center')};
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

const Sidebar = () => (
  <Container>
    <List>{data.map(({ title, slug, head }) => <Item key={slug} title={title} slug={slug} head={head} />)}</List>
  </Container>
)

export default Sidebar
