import React from 'react';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';
import Numbers from './Numbers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        {/* <!-- OddNumbers --> */}
        <OddNumbers number={this.state.number} title="Odd number" />
        {/* <!-- EvenNumbers --> */}
        <EvenNumbers number={this.state.number} title="Even number" />
        {/* <!-- Numbers --> */}
        <Numbers number={this.state.number} title="All numbers" />
        {/* <!-- Numbers --> */}
        <Numbers number={17} title="Just 17" />
      </div>
    );
  }
}

export default App;
