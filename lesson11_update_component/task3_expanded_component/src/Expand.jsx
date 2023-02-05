import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isExpanded, onChange, title, children }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onChange}>
          <i
            className={isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
          ></i>
          {/* <FontAwesomeIcon icon="fas fa-chevron-up" /> */}
        </button>
      </div>
      {isExpanded ? children : null}
    </div>
  );
};

Expand.propTypes = {
  isExpanded: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  isExpanded: false,
  title: '',
};

export default Expand;
