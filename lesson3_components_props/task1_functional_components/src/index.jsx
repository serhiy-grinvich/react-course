import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import './index.scss';
import './search.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" />, rootElem);
