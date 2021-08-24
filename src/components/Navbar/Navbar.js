import React from 'react'
import { Nav, Heading, LinksWrapper, LinkWrapper } from './style'

export default function Navbar() {
    return (
        <Nav>
          <Heading>Web woriers</Heading>
          <LinksWrapper>
              <LinkWrapper to='/'>Home</LinkWrapper>
              <LinkWrapper to='/about'>About</LinkWrapper>
              <LinkWrapper to='/projects'>Projects</LinkWrapper>
          </LinksWrapper>  
        </Nav>
    )
}
