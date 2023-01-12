import React from 'react';

const Search = (props) => {
  const age = new Date(Date.now() - props.birthDate).getFullYear() - 1970;
  // console.log(age);

  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${age} years old`}</div>
  );
};

export default Search;
