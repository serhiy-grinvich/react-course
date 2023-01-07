import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <h1 className="greeting__title">Hello, world!</h1>
    <p className="greeting__text">I'm learning React</p>
  </div>
);

// console.log(greeting);

ReactDOM.render(element, rootElement);
