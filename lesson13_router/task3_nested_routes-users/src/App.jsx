import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

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
            {/* <a href="/users">Users</a> */}
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
