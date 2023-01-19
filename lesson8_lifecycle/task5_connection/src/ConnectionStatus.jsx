import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({ status: true });
  };
  onOffline = () => {
    this.setState({ status: false });
  };
  render() {
    return (
      <div className={this.state.status ? 'status' : 'status status_offline'}>
        {this.state.status ? 'Online' : 'Offline'}
      </div>
    );
  }
}

export default ConnectionStatus;
