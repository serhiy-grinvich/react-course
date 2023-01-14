import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  loginHandler = () => {
    this.setState({ isLoggedIn: true });
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.logoutHandler} />
        ) : (
          <Login onLogin={this.loginHandler} />
        )}
      </div>
    );
  }
}

export default Auth;
