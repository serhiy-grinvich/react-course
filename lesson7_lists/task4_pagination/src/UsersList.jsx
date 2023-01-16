import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  goNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const users = this.props.users;
    const usersOnPage = users.slice(
      (this.state.currentPage - 1) * this.state.itemsPerPage,
      this.state.currentPage * this.state.itemsPerPage
    );
    return (
      <div>
        <Pagination
          goPrev={this.goPrevPage}
          goNext={this.goNextPage}
          currentPage={this.state.currentPage}
          totalItems={users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {usersOnPage.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
