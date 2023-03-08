import React from 'react';

const fetchUser = (url) => {
  return fetch(url).then((response) => response.json());
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }
  componentDidMount() {
    fetchUser(
      `https://api.github.com/users/${this.props.match.params.userId}`
    ).then((userData) => this.setState({ user: userData }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      fetchUser(
        `https://api.github.com/users/${this.props.match.params.userId}`
      ).then((userData) => this.setState({ user: userData }));
    }
  }

  //   componentWillUnmount() {
  //     console.log('unmount');
  //   }
  render() {
    console.log('render');

    const { name, location, avatar_url } = this.state.user;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
