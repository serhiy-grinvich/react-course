import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
    };
  }
  componentDidMount() {
    // console.log('componentDidMount');
    this.timerId = setInterval(() => {
      this.setState({
        localTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
      });
      // console.log(this.state.counter);
    }, 1000);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  render() {
    // console.log('render');

    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.localTime}</div>
      </div>
    );
  }
}

export default Clock;

// const getTimeWithOffset = (offset) => {
//   const currentTime = new Date();
//   const utcOffset = currentTime.getTimezoneOffset() / 60;
//   return new Date(
//     currentTime.setHours(currentTime.getHours() + offset + utcOffset)
//   );
// };
