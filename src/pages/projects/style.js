import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Content = styled.div`
text-align: center;
`;

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  margin: 80px 20px;
`;

export const Wrapper = styled.div``;

export const Heading2 = styled.h2`
font-size: 3em;
  margin-top: 80px;
`;

export const Heading3 = styled.h3`
font-size: 2em;
  font-weight: 400;
`;

export const Paragraph = styled.p`
 color: #ccc;
  margin-top: 4px;
`;

export const LinkWrapper = styled(Link)`
 color: white;
 text-decoration: none;
`;

export const H3 = styled.h3`
text-align: center;
  margin: 20px auto 0px;
  font-weight: 500;
`;

export const Image = styled(Img)`
 max-width: 100%;
`;