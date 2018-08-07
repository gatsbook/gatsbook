import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import TableOfContent from '../components/TableOfContent'

const Content = styled.div`
  ${tw('container flex-1')};
`
const ContentContainer = styled.div`
  ${tw('mx-auto w-5/6')};
`
const Header = styled.div`
  border-left: 3px solid;
  ${tw('border-purple')};
  ${tw('mx-auto text-xl pl-4 my-8')};
`
const Title = styled.h1`
  ${tw('text-4xl m-0')};
`
const Date = styled.span`
  ${tw('text-sm mt-2 text-grey')};
`
const TimeToRead = styled.span`
  ${tw('text-sm text-grey')};
`

const Body = styled.div`
  ${tw('mx-auto')};
  a {
    ${tw('text-purple')};
  }
`

const Container = styled.div`
  ${tw('flex container')};
`

const Seperator = styled.span`
  position: relative;
  top: 0.2rem;
  ${tw('font-black px-3 ')};
`

const HR = styled.hr`
  border: 1px solid;
  ${tw('border-grey-lighter')};
`

export const Docs = ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <Container>
        <Sidebar />
        <Content>
          <ContentContainer>
            <Header>
              <Title>{content.frontmatter.title}</Title>
              <TimeToRead>{content.timeToRead} min read</TimeToRead>
              <Seperator>&middot;</Seperator>
              <Date>Last Updated {content.frontmatter.date}</Date>
            </Header>
            <HR />
            <Body dangerouslySetInnerHTML={{ __html: content.html }} />
          </ContentContainer>
        </Content>
        <TableOfContent headings={content.headings} />
      </Container>
    </Layout>
  )
}

Docs.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Docs

export const query = graphql`
  query Docs($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "Do MMM, YYYY")
      }
      headings {
        value
        depth
      }
    }
  }
`
