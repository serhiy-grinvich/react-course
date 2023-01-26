import React from 'react';
import Profile from './Profile';

import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  handleUserData = (e) => {
    this.setState({
      userData: { ...this.state.userData, [e.target.name]: e.target.value },
    });
  };

  render() {
    // console.log(this.state.userData);
    const { userData } = this.state;
    return (
      // <!-- App -->
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          {/* <!-- ShoppingCart --> */}
          <ShoppingCart userName={userData.firstName} />
          {/* <!-- Profile --> */}
          <Profile userData={userData} onChange={this.handleUserData} />
        </main>
      </div>
    );
  }
}

export default App;
