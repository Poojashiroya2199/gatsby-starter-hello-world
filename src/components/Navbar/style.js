import styled from 'styled-components'
import { Link } from 'gatsby'

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;
  color: white;
`;

export const Heading = styled.h1``;

export const LinksWrapper = styled.div`
 display: inline-block;
 text-align: right;
`;

export const LinkWrapper = styled(Link)`
 display: inline-block;
 margin-left: 20px;
 font-weight: 400;
 padding-bottom: 8px;
 border-bottom: 3px solid transparent;
 color: white;
 &&:hover {
    border-color: white;
 }
`;