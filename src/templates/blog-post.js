import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TagList from '../components/tag-list';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledSection } from '../components/_shared/styled-section';
import SEO from '../components/seo';

const StyledBlogSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));

  & > .gatsby-image-wrapper {
    width: 100%;
  }
`;
const StyledBlogTitle = styled(StyledH1)`
  margin-top: 3rem;
`;
const StyledDate = styled.div`
  font-size: 0.8rem;

  & span {
    font-weight: 500;
  }
`;
const StyledBlogText = styled.div`
  padding: 2rem;
  width: 100%;
  background: var(--bg-code);
  border-radius: var(--radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const BlogPost = ({ data }) => {
  const readingTime = data.markdownRemark.fields.readingTime.text;
  const post = data.markdownRemark;
  const coverImage = post.frontmatter.cover_image ? post.frontmatter.cover_image.childImageSharp.fluid : null;
  const linkedin_image = post.frontmatter.linkedin_image ? post.frontmatter.linkedin_image.childImageSharp.fluid : null;

  const { tags = [], title, date } = post.frontmatter;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title={`SharePoint Blog - ${title}`} description={title} image={linkedin_image.src}/>
      <StyledBlogSection>
        <StyledBlogTitle>{title}</StyledBlogTitle>
        <StyledDate>
          Posted {date}. <span>{readingTime}.</span>
        </StyledDate>
        <TagList tags={tags} />
        {coverImage && <Img fluid={coverImage} />}
        <StyledBlogText dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledBlogSection>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "D. MMMM YYYY")
        cover_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        linkedin_image{
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 627) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
