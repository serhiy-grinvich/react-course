import React from 'react';
import Product from './Product';
import { Route, Link, Switch } from 'react-router-dom';

const Products = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
          {/* <a href="/products/book">Book</a> */}
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
          {/* <a href="/products/ball">Ball</a> */}
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:productId`} component={Product} />

        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
