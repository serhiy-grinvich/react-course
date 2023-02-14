import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ text, done, id, onCheck, onDelete }) => {
  const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onCheck(id)}
      />

      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Task;

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
