import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Menu, { MenuSeparator } from 'components/Menu';
import Hello from 'components/Hello';
import 'styles/normalize.css';
import styles from 'styles/base.css';

const routes = [
  <Route
    path="/"
    exact
    render={() => (
      <div>
        <Hello message="Hello worlds" />
        <Link to="/z">Go to ZZZ</Link>
      </div>
    )}
  />,
  <Route
    path="/z"
    exact
    render={() => <div>THIS IS ZZZ</div>}
  />,
];

const menuItems = [
  <Link to="/ventas">Ventas</Link>,
  <MenuSeparator />,
  <Link to="/clientes">Clientes</Link>,
  <Link to="/articulos">Articulos</Link>,
  <Link to="/configuracion">Configuración</Link>,
];

const App = () => (
  <Router>
    <div className={styles.content}>
      <Navbar title="La Vendimia" />
      <div className={styles.container}>
        <div className={styles.aside}>
          <Menu items={menuItems} />
        </div>
        <div className={styles['main-content']}>
          {routes}
        </div>
      </div>
    </div>
  </Router>
);

export default App;
