import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Layout from '../components/Layout'
import TimeToRead from '../components/TimeToRead'
import Date from '../components/Date'
import Seperator from '../components/Seperator'

const PostContainer = styled.div``

const Header = styled.div`
  ${tw('mx-auto lg:w-2/5 pt-16 pb-8')};
`

const Title = styled.h1`
  ${tw('lg:text-4xl m-0')};
`

const Body = styled.div`
  ${tw('mx-auto lg:w-2/5 lg:text-lg')};
  img,
  iframe {
    ${tw('w-full')};
  }
  p {
    ${tw('mb-8 leading-loose')};
  }
  li p {
    ${tw('mb-0')};
  }
  a {
    ${tw('text-black underline')};
  }
  blockquote {
    h1 {
      ${tw('text-3xl font-thin italic')};
    }
  }
`

export const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
        <Header>
          <Title>{post.frontmatter.title}</Title>
          <TimeToRead>{post.timeToRead} min read</TimeToRead>
          <Seperator>&middot;</Seperator>
          <Date>{post.frontmatter.date}</Date>
        </Header>
        <Body dangerouslySetInnerHTML={{ __html: post.html }} />
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
        image
      }
      timeToRead
    }
  }
`
