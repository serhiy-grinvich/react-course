import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
    this.increaseCounter = this.increaseCounter.bind(this);
  }
  increaseCounter() {
    this.setState({ counterValue: this.state.counterValue + 1 });
  }
  decreaseCounter = () => {
    this.setState({ counterValue: this.state.counterValue - 1 });
  };
  reset() {
    this.setState({ counterValue: 0 });
  }

  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.decreaseCounter}
        >
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.counterValue}
        </span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.increaseCounter}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
