import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { onChange, title, children } = this.props;
    const isExpanded = this.state.isExpanded;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpand}>
            <i
              className={
                isExpanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
              }
            ></i>
            {/* <FontAwesomeIcon icon="fas fa-chevron-up" /> */}
          </button>
        </div>
        {isExpanded ? children : null}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
