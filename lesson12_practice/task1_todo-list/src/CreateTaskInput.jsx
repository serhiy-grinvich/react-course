import React from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  inputChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  taskCreateHandler = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    // console.log(this.state.value);
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.inputChangeHandler}
        />
        <button
          className="btn create-task__btn"
          onClick={this.taskCreateHandler}
        >
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

//  + take text from input
//  + create task
//  + add task to tasks arr
