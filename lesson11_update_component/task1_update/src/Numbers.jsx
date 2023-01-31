import React from 'react';

class Numbers extends React.PureComponent {
  // PureComponent just 4 top level of changes !!!!!
  //   shouldComponentUpdate(nextProps) {
  //     return this.props.number !== nextProps.number;
  //   }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default Numbers;
