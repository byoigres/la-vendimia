import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Hello from '../../components/Hello';


const App = () => (
  <Router>
    <div>
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
    </div>
  </Router>
);

export default App;
