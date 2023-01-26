import React from 'react';

const UserForm = (props) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={props.userData.firstName}
        onChange={(e) => props.onChange(e)}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={props.userData.lastName}
        onChange={(e) => props.onChange(e)}
      />
    </form>
  );
};

export default UserForm;
