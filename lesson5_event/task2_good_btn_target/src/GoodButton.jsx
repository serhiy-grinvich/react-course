import React from 'react';

class GoodButton extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler = (event) => {
    alert(event.target.textContent);
  };
  render() {
    return (
      <button className="fancy-button" onClick={this.clickHandler}>
        Click me!
      </button>
    );
  }
}
export default GoodButton;
