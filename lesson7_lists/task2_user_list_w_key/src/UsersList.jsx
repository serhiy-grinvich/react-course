import React from 'react';
import User from './User';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: null,
    };
  }
  toggleSorting = () => {
    const newSorting = this.state.sorting === 'ask' ? 'desk' : 'ask';
    this.setState({ sorting: newSorting });
  };
  // const usersList =  users.map((user) => <User key={user.id} {...user} />);
  render() {
    let usersList;
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) =>
          this.state.sorting === 'ask' ? a.age - b.age : b.age - a.age
        );
    } else {
      usersList = this.props.users;
    }
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
