import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'

const Container = styled.div`
  ${tw('flex flex-col items-center')};
`

const CardContainer = styled.div`
  ${tw('md:w-2/3 lg:w-1/2 md:py-8')};
`

const BlogIndex = ({ data }) => (
  <Layout>
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <CardContainer key={node.id}>
          <Link to={node.fields.slug}>
            <PostCard
              title={node.frontmatter.title}
              timeToRead={5}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          </Link>
        </CardContainer>
      ))}
    </Container>
  </Layout>
)
BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark(filter: { fields: { template: { eq: "blog" } } }) {
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
