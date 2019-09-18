// Dependencies
import React from 'react';
import Helmet from 'react-helmet';
import VisuallyHidden from '@reach/visually-hidden';

import Link from './link';
import {
  GlitchBase,
  GlitchOne,
  GlitchTwo,
  GlitchThree,
  GlitchFour,
} from './glitch';

const Layout = ({ children, noNav }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/ctk8kir.css" />
    </Helmet>
    {noNav ? null : (
      <header className="flex items-center justify-between px-4">
        <Link to="/" className="w-32 p-4">
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
          </div>
        </Link>
        <nav className="text-white">
          <ul className="flex">
            <li>
              <Link className="link p-4" to="/episodes">
                Episodes
              </Link>
            </li>
            <li>
              <Link className="link p-4" to="/setup">
                Podcast Setup
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )}
    {children}
    <footer className="w-11/12 md:w-5/6 max-w-5xl mx-auto px-4 md:px-12 pb-3 text-white text-xs">
      <div className="h-px bg-white mb-3"></div>
      <p>&copy; Implementing Elm 2019</p>
    </footer>
  </>
);

export default Layout;
