import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { graphql, Link as UnstyledLink } from 'gatsby'

const Container = styled.div`
  ${tw('text-white')};
`

const Title = styled.h1``
const Subtitle = styled.h2``
const List = styled.ul``
const Item = styled.li``
const Link = styled(UnstyledLink)`
  color: white;
  text-decoration: none;
`

const BlogIndex = ({ data }) => (
  <Container>
    <Title>Blog</Title>
    <Subtitle>Wrote {data.allMarkdownRemark.totalCount} post</Subtitle>
    <List>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.fields.slug}>
          <Item>{node.frontmatter.title}</Item>
        </Link>
      ))}
    </List>
  </Container>
)
BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          excerpt
        }
      }
    }
  }
`

export default BlogIndex
