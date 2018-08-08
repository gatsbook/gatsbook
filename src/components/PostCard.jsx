import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Seperator from '../components/Seperator'
import Date from '../components/Date'
import TimeToRead from '../components/TimeToRead'

const Container = styled.div`
  ${tw('shadow px-12 py-16 w-full text-black')};
`
const PostCard = ({ title, excerpt, timeToRead, date }) => (
  <Container>
    <h2>{title}</h2>
    <p>{excerpt}</p>
    <TimeToRead>{timeToRead} min read</TimeToRead>
    <Seperator>&middot;</Seperator>
    <Date>Last Updated {date}</Date>
  </Container>
)

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}

export default PostCard
