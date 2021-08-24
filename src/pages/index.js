import React from "react"
import { graphql } from "gatsby"
import BaseLayout from "../components/Layout/Layout"
import { GlobalStyle } from "../style/global"
import {Section, Content, Heading2, Heading3, Paragraph, LinkWrapper, Image } from './styles/index'

const Home = ({data}) => {
  console.log(data);
  return (
    <>
    <GlobalStyle />
    <BaseLayout>
      <Section>
        <Content>
        <Heading2>Design</Heading2>
        <Heading3>Develop & Deploy</Heading3>
        <Paragraph>UX designer & web-developer based in Manchester.</Paragraph>
        <LinkWrapper to='/projects'>My Protfolio Projects</LinkWrapper>
        </Content>
        <Image fluid={data.file.childImageSharp.fluid} />
      </Section>
    </BaseLayout>
    </>
  );
};

export default Home;

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`;
