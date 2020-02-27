// Dependencies
import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import { GlitchBase, GlitchOne, GlitchTwo, GlitchThree, GlitchFour } from '../components/glitch';
import Survey from '../components/survey';
import Link from '../components/link';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout noNav>
    <SEO />
    <section className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-11/12 md:w-5/6 max-w-5xl mx-auto">
        <VisuallyHidden>
          <h1>Implementing Elm</h1>
        </VisuallyHidden>
        <div aria-hidden>
          <div className="relative">
            <GlitchBase className="glitch-base" />
            <GlitchOne className="glitch-01 absolute w-full inset-0 opacity-0" />
            <GlitchTwo className="glitch-02 absolute w-full inset-0 opacity-0" />
            <GlitchThree className="glitch-03 absolute w-full inset-0 opacity-0" />
            <GlitchFour className="glitch-04 absolute w-full inset-0 opacity-0" />
          </div>
          <p className="text-center">
            <Link to="/104" className="btn btn--primary inline-block w-full md:w-3/5">
              Listen To The Latest Episode
            </Link>
          </p>
        </div>
      </div>
    </section>
    <section className="w-11/12 md:w-5/6 max-w-5xl mx-auto px-4 md:px-12 pt-6 text-white">
      <div className="h-px bg-white mb-16" />
      <p className="mb-12 leading-relaxed lg:text-lg">
        Implementing Elm will dive deep into specific problems to help the Elm community get better together by
        listening to real implementation stories from the Elm community. Although we have a strong and helpful community
        (one of the best in development in my opinion) Elm is young. The depth of resources that share a team or
        community members perspective on implementing Elm features in production can be better and I want to help.
        Implementing Elm will be a platform that shares real implementation stories from the community. Both through
        audio, text, and who know what else we can do.
      </p>
    </section>
    <section className="w-11/12 md:w-5/6 max-w-5xl mx-auto px-4 md:px-12 pt-6 text-white">
      <div className="h-px bg-white" />
      <ul>
        {data.allMdx.edges.map(({ node }) => (
          <li className="episode-preview py-16 border-b border-white">
            <Link to={node.fields.slug}>
              <p className="text-grey-400">{node.frontmatter.subtitle}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mt-2 leading-tight uppercase tracking-wide">
                {node.frontmatter.title}
              </h2>
              <p className="leading-relaxed md:text-lg text-grey-400 mt-3">{node.frontmatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    <section className="w-11/12 md:w-5/6 max-w-5xl mx-auto px-4 md:px-12 pt-6 pb-16 text-white">
      <div className="h-px bg-white mb-16" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:max-w-sm lg:mr-16 mb-8">
          <h2 className="text-5xl font-display uppercase tracking-wide leading-tight mb-4">
            Tell Me What You Want To Hear
          </h2>
          <p className="leading-relaxed">
            The first season is already locked down for exploring text editing/parsing implementation stories, but get
            your vote in for the upcoming seasons.
          </p>
        </div>
        <Survey />
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`;

export default IndexPage;
