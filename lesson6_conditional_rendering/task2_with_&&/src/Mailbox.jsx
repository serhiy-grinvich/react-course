import React from 'react';

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
    this.unreadMessages = props.unreadMessages;
  }

  render() {
    return (
      <>
        <span className="mailbox__text">Messages</span>
        {this.unreadMessages.length > 0 && (
          <span className="mailbox__count">{this.unreadMessages.length}</span>
        )}
      </>
    );
  }
}

export default Mailbox;
