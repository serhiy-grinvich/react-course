import React from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }
  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  componentWillUnmount() {}

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => this.setState({ userData }));
  };

  render() {
    // console.log(userData);
    // if (!this.state.userData) return null;
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
