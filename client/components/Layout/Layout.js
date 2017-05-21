import React from 'react';
import propTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <h1>My APP</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default Layout;
