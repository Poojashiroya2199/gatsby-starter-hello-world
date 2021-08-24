import styled from 'styled-components'
import { Link } from 'gatsby'

export const Section = styled.section`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
`;

export const Content = styled.div``;

export const Heading = styled.h1``;

export const Heading2 = styled.h2`
font-size: 4em;
`;

export const Heading3 = styled.h3`
font-size: 3em;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Heading4 = styled.h4``;

export const Heading5 = styled.h5``;

export const Paragraph = styled.p``;

export const LinkWrapper = styled(Link)`
display: inline-block;
  background: #D42990;
  padding: 10px 16px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: 500;
  color: white;
  &&:hover {
    color: white;
    transform: scale(1.1  );
  }
`;