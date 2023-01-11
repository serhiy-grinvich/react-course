import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './index.scss';

const rootElem = document.querySelector('#root');

const user = {
  name: 'Tom',
  avatarUrl: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
};

ReactDOM.render(
  <Comment author={user} text="Yeah, Baby! Just do IT!" date={new Date()} />,
  rootElem
);
