import React, { Children } from 'react'
import Navbar from '../Navbar/Navbar'
import { BaseLayoutWrapper, Content, FooterContent, FooterWrapper } from './style'

const BaseLayout = (props) => {
    const {children} = props;
    return (
        <BaseLayoutWrapper>
            <Navbar />
            <Content>
                {children}
            </Content>
            <FooterWrapper>
                <FooterContent>CopyRight 2021 Web Warriors.</FooterContent>
            </FooterWrapper>
        </BaseLayoutWrapper>
    )
};

export default BaseLayout;
