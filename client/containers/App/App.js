import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import Hello from 'components/Hello';

const App = () => (
  <Router>
    <Layout>
      <Navbar title="La Vendimia" />
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <Hello message="Hello worlds" />
            <Link to="/z">Go to ZZZ</Link>
          </div>
        )}
      />
      <Route
        path="/z"
        exact
        render={() => <div>THIS IS ZZZ</div>}
      />
    </Layout>
  </Router>
);

export default App;
