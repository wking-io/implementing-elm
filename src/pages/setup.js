import React from 'react';
import { graphql } from 'gatsby';

import Link from '../components/link';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Setup = ({ data }) => (
  <Layout>
    <SEO title="Podcast Setup & Equipment" />
    <div
      className="max-w-3xl mx-auto px-8 py-20 flex flex-col min-h-screen text-white
    "
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-12 leading-tight uppercase tracking-wide">
        Podcast Setup & Equipment
      </h2>
      {data.allSetupJson.edges.map(({ node }) => (
        <>
          <h3 className="text-2xl font-bold mb-6 capitalize">{node.title}</h3>
          <ul>
            {node.items.map(({ type, name, link }) => (
              <li
                key={link + type}
                className="setup-item mb-8 border-b border-grey-400"
              >
                <Link to={link}>
                  <p className="uppercase text-sm mb-1 text-grey-400">{type}</p>
                  <p className="mb-8">{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ))}
      <Link className="link" to="/">
        Back to homepage
      </Link>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allSetupJson {
      edges {
        node {
          title
          items {
            type
            name
            link
          }
        }
      }
    }
  }
`;

export default Setup;
