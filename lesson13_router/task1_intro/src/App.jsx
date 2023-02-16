import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import Products from './Products';
import Home from './Home';
import PageNotFound from './PageNotFound';

const App = () => {
  // alert('page reload');
  return (
    <div className="page">
      <Router>
        <Switch>
          {/* <!-- Home --> */}

          <Route exact path="/">
            <Home />
          </Route>

          {/* <!-- Products --> */}

          <Route path="/products">
            <Products />
          </Route>

          {/* <!-- Contacts --> */}

          <Route path="/contacts">
            <Contacts />
          </Route>

          {/* <!-- PageNotFound --> */}

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
