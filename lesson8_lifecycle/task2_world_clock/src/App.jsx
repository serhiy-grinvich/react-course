import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isClockVisible: true,
    };
  }

  toggleVisibilyty = () => {
    this.setState({ isClockVisible: !this.state.isClockVisible });
  };
  render() {
    return (
      <>
        {this.state.isClockVisible && (
          <>
            <Clock location="New York" offset={-5} />
            <Clock location="Kiyv" offset={2} />
            <Clock location="London" offset={0} />
          </>
        )}

        <button className="btn" onClick={this.toggleVisibilyty}>
          {this.state.isClockVisible ? 'HIDE' : 'SHOW'}
        </button>
      </>
    );
  }
}
export default App;
