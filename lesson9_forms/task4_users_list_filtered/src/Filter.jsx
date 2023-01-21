import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   handleTextChange = (e) => {
  //     this.props.onChange(e.target.value);
  //   };
  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.props.filterText}
          //   onChange={this.handleTextChange}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Filter;
