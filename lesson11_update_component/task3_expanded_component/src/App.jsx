import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="Some title"
          isExpanded={this.state.isExpanded}
          onChange={this.toggleExpand}
        >
          {this.state.isExpanded ? (
            <div className="expand__content">
              <p>
                Hooks are a new addition in React 16.8. They let you use state
                and other React features without writing a class.
              </p>
            </div>
          ) : null}
        </Expand>
      </div>
    );
  }
}

export default App;
