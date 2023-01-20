import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {}

  componentWillUnmount() {}

  onChangeHandler = (event) => {
    this.setState({ value: event.target.value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
