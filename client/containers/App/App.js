/* eslint import/no-extraneous-dependencies: 0, import/extensions: 0*/
import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Navbar from 'components/Navbar';
import { Menu, MenuSeparator } from 'components';
import Hello from 'components/Hello';
import Ventas from 'containers/Ventas';
import { ListCustomers, AddCustomer, EditCustomer } from 'containers/Customers';
import { ListItems, AddItem, EditItem } from 'containers/Items';
import Configuration from 'containers/Configuration';
import 'styles/normalize.css';
import styles from 'styles/base.css';

const routes = [
  <Route
    path="/"
    key="@route/root"
    exact
    render={() => (
      <div>
        <Hello message="Hello worlds" />
        <Link to="/z">Go to ZZZ</Link>
      </div>
    )}
  />,
  <Route
    path="/sales"
    key="@route/sales"
    exact
    render={() => <Ventas />}
  />,
  <Route
    path="/customers"
    key="@route/customers"
    exact
    render={() => <ListCustomers />}
  />,
  <Route
    path="/customers/add"
    key="@route/customers/add"
    exact
    render={() => <AddCustomer />}
  />,
  <Route
    path="/customers/edit/:clave"
    key="@route/customers/edit"
    exact
    render={() => <EditCustomer />}
  />,
  <Route
    path="/items"
    key="@route/items"
    exact
    render={() => <ListItems />}
  />,
  <Route
    path="/items/add"
    key="@route/items/add"
    exact
    render={() => <AddItem />}
  />,
  <Route
    path="/items/edit/:clave"
    key="@route/items/edit"
    exact
    render={() => <EditItem />}
  />,
  <Route
    path="/configuration"
    key="@route/configuration"
    exact
    render={() => <Configuration />}
  />,
];

const menuItems = [
  <Link to="/sales">Ventas</Link>,
  <MenuSeparator />,
  <Link to="/customers">Clientes</Link>,
  <Link to="/items">Articulos</Link>,
  <Link to="/configuration">Configuración</Link>,
];

/* eslint react/prop-types: 0*/
const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={styles.content}>
        {/* <Navbar title="La Vendimia" /> */}
        <div className={styles.container}>
          <div className={styles.aside}>
            <Menu items={menuItems} />
          </div>
          <div className={styles['main-content']}>
            {routes}
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
