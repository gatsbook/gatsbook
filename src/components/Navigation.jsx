import React from 'react'
import styled, { css } from 'react-emotion'
import Link from '../components/Link'
import logo from '../images/logo.svg'
import { SidebarVisibleContext } from '../components/Layout'

const Container = styled.nav`
  transition: 0.5s;
  ${tw('container px-8 md:px-16 xl:px-32 h-24 bg-white flex items-center relative shadow')};
`

const Links = styled.div`
  ${tw('hidden lg:block')};
`
const LinkItems = styled(Link)`
  ${tw('no-underline pl-16 text-purple text-xl font-medium font-heading')};
`

const LogoImage = styled.img`
  ${tw('h-16')};
`
const LogoText = styled.h1`
  ${tw('ml-8')};
`
const Logo = () => (
  <Link
    to="/"
    className={css`
      ${tw('flex')};
    `}
  >
    <LogoImage src={logo} alt="logo" />
    <LogoText>Gatsbook</LogoText>
  </Link>
)

const Menu = props => (
  <div
    {...props}
    className={css`
      ${tw('block lg:hidden pr-4 text-lg')};
    `}
  >
    &#9776;
  </div>
)

const Navigation = () => (
  <Container>
    <SidebarVisibleContext.Consumer>{({ toggle }) => <Menu onClick={toggle} />}</SidebarVisibleContext.Consumer>
    <Logo />
    <Links>
      <LinkItems to="https://github.com/gatsbook/gatsbook">Github</LinkItems>
      <LinkItems to="/">Discord</LinkItems>
      <LinkItems to="/">Need Help?</LinkItems>
    </Links>
  </Container>
)

export default Navigation
