import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  fetchTasksList,
  createNewTask,
  updateTask,
  deleteTask,
} from './tasksGateways';

class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksData) => this.setState({ tasks: tasksData }));
  };

  onCreateTask = (text) => {
    const newTask = {
      text,
      done: false,
    };

    // create func which post new task to server
    // change state to actual tasks list
    createNewTask(newTask).then(() => this.fetchTasks());
  };

  checkboxChangeHandler = (id) => {
    // find task in list
    // toggle done prop
    // add to list

    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
    // const updatedTasks = this.state.tasks.map((task) => {
    //   if (task.id === id) return { ...task, done: !task.done };
    //   return task;
    // });
    // this.setState({ tasks: updatedTasks });
  };

  deleteTaskHandler = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    // console.log(this.state.tasks);
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTaskInput onCreate={this.onCreateTask} />
        <ul className="list">
          {sortedList.map((task) => {
            return (
              <Task
                key={task.id}
                {...task}
                onCheck={this.checkboxChangeHandler}
                onDelete={this.deleteTaskHandler}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default TasksList;
