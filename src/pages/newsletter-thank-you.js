import React from 'react';

import Link from '../components/link';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NewsletterThankYou = () => (
  <Layout>
    <SEO title="Thank You For Signing Up" />
    <div
      className="max-w-3xl mx-auto px-8 md:px-12 flex flex-col min-h-screen md:items-center justify-center md:text-center text-white
    "
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight uppercase tracking-wide">
        Thank You!
      </h2>
      <p className="text-lg mb-8 text-grey-400">
        You should get an email to your inbox shortly asking to confirm your
        email address.
      </p>
      <Link className="btn btn--primary" to="/">
        Back to homepage
      </Link>
    </div>
  </Layout>
);

export default NewsletterThankYou;
