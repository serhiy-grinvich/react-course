import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  colorChanger = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <>
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.colorChanger(RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={this.colorChanger.bind(this, GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.colorChanger(BLUE)}
        ></button>
      </>
    );
  }
}

export default Colors;
