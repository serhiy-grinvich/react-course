import React from 'react';

const NumbersList = (props) => {
  const numbers = props.numbers.map((num) => <li>{num}</li>);
  return <ul>{numbers}</ul>;
};

export default NumbersList;
