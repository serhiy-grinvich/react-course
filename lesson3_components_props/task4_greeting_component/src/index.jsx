import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="Tom"
    lastName="Kozlov"
    birthDate={new Date('1966-01-9')}
  />,
  rootElem
);
