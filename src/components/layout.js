// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Components

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/ctk8kir.css" />
    </Helmet>
    {children}
  </>
);

export default Layout;
