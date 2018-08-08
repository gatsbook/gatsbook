import React from 'react'
import styled, { css } from 'react-emotion'
import Link from '../components/Link'
import logo from '../images/logo.svg'
import { SidebarVisibleContext } from '../components/Layout'

const Container = styled.nav`
  transition: 0.5s;
  ${tw('fixed w-full')};
  ${tw('container px-8 md:px-16 xl:px-32 h-24 bg-white flex items-center lg:relative shadow')};
`

const Links = styled.div`
  ${tw('hidden lg:block')};
`
const LinkItems = styled(Link)`
  ${tw('no-underline pl-16 text-xl font-medium font-heading')};
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

const StyledMenu = styled.div`
  ${tw('block lg:hidden pr-4 text-lg')};
`
const CloseIcon = () => <span>&#x2715;</span>
const HamburgerIcon = () => <span>&#9776;</span>
const Menu = () => (
  <SidebarVisibleContext.Consumer>
    {({ toggle, on }) => <StyledMenu onClick={toggle}>{on ? <CloseIcon /> : <HamburgerIcon />}</StyledMenu>}
  </SidebarVisibleContext.Consumer>
)

const TakeSpaceWhenFixed = styled.div`
  ${tw('h-24 w-100 lg:hidden')};
`

const Navigation = () => (
  <React.Fragment>
    <Container>
      <Menu />
      <Logo />
      <Links>
        <LinkItems to="https://github.com/gatsbook/gatsbook">Github</LinkItems>
        <LinkItems to="/">Discord</LinkItems>
        <LinkItems to="/">Need Help?</LinkItems>
      </Links>
    </Container>
    <TakeSpaceWhenFixed />
  </React.Fragment>
)

export default Navigation
