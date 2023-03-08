import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = (props) => {
  const [localTime, setLocalTime] = useState(
    moment(getTimeWithOffset(props.offset)).format('LTS')
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log(localTime);
      setLocalTime(moment(getTimeWithOffset(props.offset)).format('LTS'));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{localTime}</div>
    </div>
  );
};

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       localTime: moment(getTimeWithOffset(props.offset)).format('LTS'),
//     };
//     //bad way!!!
//     setInterval(() => {
//       this.setState({
//         localTime: moment(getTimeWithOffset(props.offset)).format('LTS'),
//       });
//       // console.log(this.state.counter);
//     }, 1000);
//   }
//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{this.state.localTime}</div>
//       </div>
//     );
//   }
// }

export default Clock;

// const getTimeWithOffset = (offset) => {
//   const currentTime = new Date();
//   const utcOffset = currentTime.getTimezoneOffset() / 60;
//   return new Date(
//     currentTime.setHours(currentTime.getHours() + offset + utcOffset)
//   );
// };
