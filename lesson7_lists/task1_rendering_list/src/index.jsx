import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList';
import './index.scss';

const numbers = [1, 3, 4, 6, 7];

const rootElem = document.querySelector('#root');

ReactDOM.render(<NumbersList numbers={numbers} />, rootElem);
