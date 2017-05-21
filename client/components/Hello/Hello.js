import React from 'react';
import propTypes from 'prop-types';

const App = ({ message }) => (
  <div>{message}</div>
);

App.propTypes = {
  message: propTypes.string.isRequired,
};

export default App;
