/* eslint-disable no-undef */

// put your code here
const rootEl = document.querySelector('#root');

const greetingEl = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingEl, rootEl);
