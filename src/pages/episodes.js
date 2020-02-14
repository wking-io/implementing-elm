import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Episodes" />
      <div className="max-w-3xl mx-auto px-8 md:px-12 py-20 flex flex-col min-h-screen text-white">
        <h2 className="uppercase font-bold">Episode List</h2>
        <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li className="episode-preview py-16 border-b border-white">
              <Link to={node.fields.slug}>
                <p className="text-grey-400">{node.frontmatter.subtitle}</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-3 leading-tight uppercase tracking-wide">
                  {node.frontmatter.title}
                </h2>
                <p className="leading-relaxed md:text-lg text-grey-400">{node.frontmatter.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query EpisodeQuery {
    allMdx(filter: { frontmatter: { published: { ne: false } } }, sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            description
            published
          }
        }
      }
    }
  }
`;
