import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverColor: '',
    };
  }
  titleChangerHover = (color) => {
    this.setState({
      hoverColor: color,
    });
  };
  titleChangerOut = () => {
    this.setState({
      hoverColor: '',
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.hoverColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.titleChangerHover('Coral')}
            onMouseOut={this.titleChangerOut}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.titleChangerHover('Aqua')}
            onMouseOut={this.titleChangerOut}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.titleChangerHover('Bisque')}
            onMouseOut={this.titleChangerOut}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
