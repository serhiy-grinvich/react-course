import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    // this.usersList = this.props.users;
  }

  handleChange = (textValue) => {
    this.setState({ filterText: textValue });
    // this.filterUsersByName(textValue);
  };

  filterUsersByName = () => {
    this.usersList =
      this.state.filterText === ''
        ? this.props.users
        : this.props.users.filter((user) =>
            user.name
              .toLowerCase()
              .includes(this.state.filterText.toLowerCase())
          );
  };

  /// very funny bug!!!
  // filterUsersByName = (text) => {
  //   this.usersList =
  //     this.state.filterText === ''
  //       ? this.props.users
  //       : this.props.users.filter((user) =>
  //           user.name.toLowerCase().includes(text.toLowerCase())
  //         );
  // };

  render() {
    this.filterUsersByName();

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={this.usersList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {this.usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
