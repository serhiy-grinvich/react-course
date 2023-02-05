import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  hideDialog = () => {
    this.setState({ isOpen: false });
  };

  showDialog = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      // <!-- App -->
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        {/* <!-- Dialog --> */}
        <Dialog
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          title="Recommendation"
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}

export default App;
