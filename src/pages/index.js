import React from "react"
import BaseLayout from "../components/Layout/Layout"
import { GlobalStyle } from "../style/global"
import {Section, Content, Heading2, Heading3, Paragraph, LinkWrapper } from './styles/index'

const Home = () => {
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
      </Section>
    </BaseLayout>
    </>
  );
};

export default Home;