import React from 'react';
import Info from './Info';

const iphone13 = 'Price is 500$. Available in 2 colors';
const iphone13Pro = 'Price is 650$. Not available in 1 color';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  setMessage = (text) => {
    this.setState({ message: text });
  };

  render() {
    return (
      <div className="page">
        {/* {this.state.message && <Info message={this.state.message} />} */}
        <Info message={this.state.message} />
        <div className="actions">
          <button className="btn" onClick={() => this.setMessage(iphone13)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.setMessage(iphone13Pro)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setMessage('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
