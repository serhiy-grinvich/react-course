import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      download: false,
    };
  }

  loginHandler = () => {
    this.setState({ isLoggedIn: true, download: true });

    setTimeout(() => {
      this.setState({ download: false });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="panel">
        {this.state.download ? (
          <Spinner size={50} />
        ) : this.state.isLoggedIn ? (
          <Logout onLogout={this.logoutHandler} />
        ) : (
          <Login onLogin={this.loginHandler} />
        )}
      </div>
    );
  }
}

export default Auth;
