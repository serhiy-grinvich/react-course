import React from 'react';

class Dimensions extends React.Component {
  constructor() {
    super();
    this.state = {
      width: null,
      height: null,
    };
  }
  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    window.addEventListener('resize', this.onResize);
    this.setDimensions(innerWidth, innerHeight);
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({ width, height });
    document.title = `${width} x ${height}`;
  };

  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}
export default Dimensions;
