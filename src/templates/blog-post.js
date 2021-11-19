import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TagList from '../components/tag-list';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledSection } from '../components/_shared/styled-section';
import RelatedPosts from '../components/related-posts';
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
  const coverImage = post.frontmatter.cover_image
    ? getImage(post.frontmatter.cover_image.childImageSharp.gatsbyImageData)
    : null;
  const linkedin_image = post.frontmatter.linkedin_image
    ? post.frontmatter.linkedin_image.childImageSharp.gatsbyImageData
    : null;
  const relatePost = data.allMarkdownRemark.edges;

  const { tags = [], title, date } = post.frontmatter;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title={`SharePoint Blog - ${title}`} description={title} image={linkedin_image.src} />
      <StyledBlogSection>
        <StyledBlogTitle>{title}</StyledBlogTitle>
        <StyledDate>
          Posted {date}. <span>{readingTime}.</span>
        </StyledDate>
        <TagList tags={tags} />
        {coverImage && <GatsbyImage image={coverImage} />}
        <StyledBlogText dangerouslySetInnerHTML={{ __html: post.html }} />
        <RelatedPosts data={relatePost}></RelatedPosts>
      </StyledBlogSection>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!, $relatedFilePaths: [String]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
        cover_image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        linkedin_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { in: $relatedFilePaths } }, limit: 4) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover_image {
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
              }
            }
            description
            tags
            date
          }
        }
      }
    }
  }
`;
