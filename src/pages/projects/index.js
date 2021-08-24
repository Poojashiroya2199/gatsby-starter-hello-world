import React from 'react'
import { graphql } from 'gatsby'
import BaseLayout from '../../components/Layout/Layout'
import { GlobalStyle } from '../../style/global'
import { Content, Wrapper, Heading2, Heading3, LinkWrapper, Project, H3, Paragraph, Image} from './style'

const Projects = ({data}) => {
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    console.log(projects);
    return (
        <>
        <GlobalStyle />
        <BaseLayout>
        <Content>
            <Heading2>Portfolio</Heading2>
            <Heading3>Projects & Websites I've created</Heading3>
            <Project>
                {projects.map((project,index) => (
                    <LinkWrapper to={project.frontmatter.slug} key={project.id}>
                        <Wrapper>
                        <Image fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                            <H3>{project.frontmatter.title}</H3>
                            <Paragraph>{project.frontmatter.slug}</Paragraph>
                        </Wrapper>
                    </LinkWrapper>
                ))}
            </Project>
            <Paragraph>Like what you see? Email me at {contact} for a quote!</Paragraph>
        </Content>
        </BaseLayout>
        </>
    )
};

export default Projects;

//query for projects
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site{
      siteMetadata{
          contact
      }
  }
}
`;
