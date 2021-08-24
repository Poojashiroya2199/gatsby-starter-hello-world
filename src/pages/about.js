import React from 'react'
import BaseLayout from '../components/Layout/Layout'
import { GlobalStyle } from '../style/global'
import  {Content, Heading, Paragraph } from './styles/about'

const About = () => {
    return (
        <>
        <GlobalStyle />
        <BaseLayout>
        <Content>
            <Heading>About Page</Heading>
            <Paragraph>Lorem impsum dolor sut amet consectature adipisicing elit.</Paragraph>
            <Paragraph>Lorem impsum dolor sut amet consectature adipisicing elit.</Paragraph>
            <Paragraph>Lorem impsum dolor sut amet consectature adipisicing elit.</Paragraph>
        </Content>
        </BaseLayout>
        </>
    )
};

export default About;
