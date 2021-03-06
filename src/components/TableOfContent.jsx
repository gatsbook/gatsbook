import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const Container = styled.div`
  ${tw('w-1/5 pt-8 hidden xl:block')};
`
const Title = styled.span`
  ${tw('text-grey')};
`
const List = styled.ul`
  border-left: 1px solid;
  ${tw('border-grey-light')};
  ${tw('list-reset pl-3')};
`
const ListItem = styled.li`
  margin-left: ${props => (props.depth - 1) * 15}px;
  ${tw('text-sm text-grey-dark my-2')};
`

const headingToId = string => `#${string.toLowerCase().replace(/\s/g, '-')}`

const TableOfContent = ({ headings }) => (
  <Container>
    <Title>Table Of Content</Title>
    <List>
      {headings.map(
        heading =>
          heading.depth <= 3 && (
            <a key={heading.value} href={headingToId(heading.value)}>
              <ListItem key={heading.value} depth={heading.depth}>
                {heading.value}
              </ListItem>
            </a>
          )
      )}
    </List>
  </Container>
)

TableOfContent.propTypes = {
  headings: PropTypes.array.isRequired,
}

export default TableOfContent
