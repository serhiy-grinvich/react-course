import React from 'react';
import User from './User';
import { Route, Switch, Link } from 'react-router-dom';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          {/* <a href="/users/github">Github</a> */}
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          {/* <a href="/users/facebook">Facebook</a> */}
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>

      {/* <!-- User --> */}
      <Switch>
        <Route path="/users/:userId" component={User} />

        <Route exact path="/users">
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
