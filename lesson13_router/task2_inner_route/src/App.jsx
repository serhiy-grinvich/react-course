import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

const App = () => {
  // alert('page reload');
  return (
    <div className="page">
      <Router>
        <ul className="navigation">
          <li className="navigation__item">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            {/* <a href="/products">Products</a> */}
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Switch>
          {/* <!-- Home --> */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* <!-- Products --> */}
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
