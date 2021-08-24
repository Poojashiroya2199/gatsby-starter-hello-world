import React from 'react'
import BaseLayout from '../components/Layout/Layout'
import { GlobalStyle } from '../style/global'
import { Content, Heading2, Paragraph } from './styles/404'

export default function NotFound() {
    return (
        <>
        <GlobalStyle />
        <BaseLayout>
        <Content>
            <Heading2>404</Heading2>
            <Paragraph>Sorry, that page doesn't exist.</Paragraph>
        </Content>
        </BaseLayout>
        </>
    )
}
