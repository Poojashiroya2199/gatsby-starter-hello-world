import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Nav, Heading, LinksWrapper, LinkWrapper } from './style'

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
       site {
        siteMetadata {
        title
        }
      }
    }
    `);
    const  {title} = data.site.siteMetadata;
    return (
        <Nav>
          <Heading>{title}</Heading>
          <LinksWrapper>
              <LinkWrapper to='/'>Home</LinkWrapper>
              <LinkWrapper to='/about'>About</LinkWrapper>
              <LinkWrapper to='/projects'>Projects</LinkWrapper>
          </LinksWrapper>  
        </Nav>
    )
};

export default Navbar;
