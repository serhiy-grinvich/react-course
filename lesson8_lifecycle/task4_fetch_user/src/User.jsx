import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.fetchUser(this.props.userId);
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {}

  componentWillUnmount() {}

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => this.setState({ user }));
  };

  render() {
    const { user } = this.state;
    if (!user) return null;
    return (
      <div className="user">
        <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
