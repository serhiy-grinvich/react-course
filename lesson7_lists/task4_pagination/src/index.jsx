import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

// test data
const users = [
  {
    name: 'Kolya',
    age: 1,
    id: 'id-01',
  },
  {
    name: 'Anya',
    age: 2,
    id: 'id-02',
  },
  {
    name: 'BOB',
    age: 3,
    id: 'id-03',
  },
  {
    name: 'Dima',
    age: 4,
    id: 'id-04',
  },
  {
    name: 'Serjoja',
    age: 5,
    id: 'id-05',
  },
  {
    name: 'Jenya',
    age: 6,
    id: 'id-06',
  },
  {
    name: 'Tommy',
    age: 7,
    id: 'id-07',
  },
  {
    name: 'Buba',
    age: 8,
    id: 'id-08',
  },
  {
    name: 'Buba',
    age: 9,
    id: 'id-09',
  },
  {
    name: 'Buba',
    age: 10,
    id: 'id-10',
  },
];
// console.log(transactions);

const rootElem = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElem);

// algo
//
