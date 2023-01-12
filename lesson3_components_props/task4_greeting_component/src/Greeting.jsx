import React from 'react';

const Greeting = (props) => {
  const age = new Date(Date.now() - props.birthDate).getFullYear() - 1970;
  const { firstName, lastName } = props;
  // console.log(age);

  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I am ${age} years old`}</div>
  );
};

export default Greeting;
