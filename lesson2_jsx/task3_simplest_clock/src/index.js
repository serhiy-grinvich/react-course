import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');
const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();

  const timerColor = {
    color: seconds % 2 !== 0 ? '#fff' : '#000',
    backgroundColor: seconds % 2 === 0 ? '#fff' : '#000',
  };

  const element = (
    <div className="seconds" style={timerColor}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootElem);
};
setInterval(() => renderSeconds(new Date()), 1000);
