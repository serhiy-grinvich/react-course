import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  // setMessage = (text) => {
  //   this.setState({ message: text });
  // };

  render() {
    return (
      <div className="status">
        {this.props.isOnline ? <Online /> : <Offline />}
      </div>
    );
  }
}

export default Status;
