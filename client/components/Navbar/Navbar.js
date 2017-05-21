import React from 'react';
import propTypes from 'prop-types';

const Layout = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

Layout.propTypes = {
  title: propTypes.string.isRequired,
};

export default Layout;
