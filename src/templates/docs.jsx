import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import TableOfContent from '../components/TableOfContent'
import TimeToRead from '../components/TimeToRead'
import Date from '../components/Date'
import Seperator from '../components/Seperator'
import { left as borderLeft } from '../styles/border'

const Content = styled.div`
  ${tw('container flex-1')};
`
const ContentContainer = styled.div`
  ${tw('mx-auto w-5/6')};
`
const Header = styled.div`
  ${borderLeft};
  ${tw('mx-auto text-xl pl-4 my-8')};
`
const Title = styled.h1`
  ${tw('text-4xl m-0')};
`

const Body = styled.div`
  ${tw('mx-auto')};
`

const Container = styled.div`
  ${tw('flex container')};
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
            <hr />
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
