import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }
  toggler = (event) => {
    this.setState({
      status: event.target.textContent === 'Off' ? 'On' : 'Off',
    });
  };
  render() {
    return (
      <div className="toggler" onClick={this.toggler}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
