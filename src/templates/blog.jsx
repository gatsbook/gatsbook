import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Layout from '../components/Layout'

const PostContainer = styled.div`
  ${tw('container')};
`

const Header = styled.div``

const Title = styled.h1`
  ${tw('text-5xl w-3/5 pl-32')};
`
const DateContainer = styled.div`
  ${tw('inline-block pl-40 absolute')};
`
const Date = styled.div`
  ${tw('w-4/5 text-white text-right float-right')};
`

const Content = styled.div`
  ${tw('mx-auto w-3/5 px-8 text-white text-xl')};
`

export const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
        <Header>
          <Title>{post.frontmatter.title}</Title>
          <DateContainer>
            <Date>{post.frontmatter.date}</Date>
          </DateContainer>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog

export const query = graphql`
  query blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "Do MMM, YYYY")
      }
    }
  }
`
