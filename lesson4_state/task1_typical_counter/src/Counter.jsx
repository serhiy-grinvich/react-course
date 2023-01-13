import React, { Component } from 'react';
import './counter.scss';

// const Counter = (props) => {
//   return <div className="counter">17</div>;
// };

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };
    //bad way!!!
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
      // console.log(this.state.counter);
    }, props.interval);
  }
  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
