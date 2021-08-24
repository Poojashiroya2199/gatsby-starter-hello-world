import React from 'react'
import { graphql } from 'gatsby'
import BaseLayout from '../components/Layout/Layout'
import { Wrapper, H2, H3, Image, Details, Featured } from '../pages/projects/style'

const ProjectDetails = ({data}) => {
    console.log(data);
    const {html} = data.markdownRemark;
    const {title, stack, featuredImg} = data.markdownRemark.frontmatter;
    return (
        <BaseLayout>
            <Details>
                <H2>{title}</H2>
                <H3>{stack}</H3>
                <Featured>
                    <Image fluid={featuredImg.childImageSharp.fluid} />
                </Featured>
                <Wrapper dangerouslySetInnerHTML={{__html: html}} />
            </Details>
        </BaseLayout>
    )
};

export default ProjectDetails;

export const query = graphql`
 query Project($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;