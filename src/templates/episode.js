import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';

export default ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col min-h-screen text-white">
        <p className="text-grey-400">{post.frontmatter.subtitle}</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-4 leading-tight uppercase tracking-wide">
          {post.frontmatter.title}
        </h2>
        <iframe
          title="episode player"
          src={`https://share.transistor.fm/e/${post.frontmatter.episode}/dark`}
          width="100%"
          height="180"
          frameborder="0"
          scrolling="no"
          seamless="true"
          className="w-full"
          style={{ height: '180px' }}
        ></iframe>
        <div className="h-px bg-white my-16"></div>

        <MDXProvider
          components={{
            h3: ({ children, ...props }) => (
              <h2
                {...props}
                className="leading-tight mt-12 mb-6 text-3xl font-display uppercase tracking-wide"
              >
                {children}
              </h2>
            ),
            p: props => (
              <p
                {...props}
                className="leading-relaxed mb-6 md:text-lg text-grey-400"
              />
            ),
            a: ({ children, ...props }) => (
              <a {...props} className="link">
                {children}
              </a>
            ),
            img: ({ alt, ...props }) => (
              <img {...props} alt={alt} className="w-full block" />
            ),
            ul: ({ children, ...props }) => (
              <ul {...props} className="list-disc ml-6">
                {children}
              </ul>
            ),
            li: ({ children, ...props }) => (
              <li {...props} className="pl-3 mb-3 text-grey-400">
                {children}
              </li>
            ),
            Link,
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subtitle
        date
        description
        episode
      }
    }
  }
`;
