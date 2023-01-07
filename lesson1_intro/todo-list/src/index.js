import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// should render following html

// <h1 class="title">Todo List</h1>

const rootEl = document.querySelector('#root');
const appendedEl = <h1 className="title">Todo List</h1>;

ReactDOM.render(appendedEl, rootEl);
