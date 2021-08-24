import React from 'react'
import BaseLayout from '../../components/Layout/Layout'
import { GlobalStyle } from '../../style/global'
import { Content, Heading2, Heading3 } from './style'

export default function Projects() {
    return (
        <>
        <GlobalStyle />
        <BaseLayout>
        <Content>
            <Heading2>Portfolio</Heading2>
            <Heading3>Projects & Websites I've created</Heading3>
        </Content>
        </BaseLayout>
        </>
    )
}
