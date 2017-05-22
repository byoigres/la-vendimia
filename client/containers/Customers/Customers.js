import React from 'react';
import { Button } from 'components';
import { Link } from 'react-router-dom';

const Customers = () => (
  <div>
    <h1>Customers</h1>
    <Button>
      <Link to="/customers/add">Agregar</Link>
    </Button>
  </div>
);

export default Customers;
