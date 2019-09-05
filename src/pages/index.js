// Dependencies
import React from 'react';
import VisuallyHidden from '@reach/visually-hidden';

// Components
// import SEO from '../components/seo';
import Layout from '../components/layout';
// import { NewsletterInput } from '../components/newsletter';
// import Link from './componenets/link';
import {
  GlitchBase,
  GlitchOne,
  GlitchTwo,
  GlitchThree,
  GlitchFour,
} from '../components/glitch';

const IndexPage = () => (
  <Layout>
    <section className="flex flex-col min-h-screen bg-black">
      <div>
        <VisuallyHidden>
          <h1>Implementing Elm</h1>
        </VisuallyHidden>
        <div className="w-5/6 max-w-4xl mt-20 mx-auto" aria-hidden>
          <div className="relative">
            <GlitchBase className="glitch-base" />
            <GlitchOne className="glitch-01 absolute w-full inset-0 opacity-0" />
            <GlitchTwo className="glitch-02 absolute w-full inset-0 opacity-0" />
            <GlitchThree className="glitch-03 absolute w-full inset-0 opacity-0" />
            <GlitchFour className="glitch-04 absolute w-full inset-0 opacity-0" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
