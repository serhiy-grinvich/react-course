import React from 'react';
import TasksList from './TasksList';

const TodoList = (props) => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <TasksList />
      </main>
    </>
  );
};

export default TodoList;
