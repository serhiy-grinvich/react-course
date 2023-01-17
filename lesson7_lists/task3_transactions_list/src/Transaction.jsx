import React from 'react';
import moment from 'moment';

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time }) => {
  // const formattedAmount = formatter.format(amount);
  // const date = moment(time).format('DD MMM');
  // const formattedTime = moment(time).locale('en-gb').format('LT');
  // const formattedRate = formatter.format(rate);
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format('DD MMM')}</span>
      <span className="transaction__time">{moment(time).format('HH:mm')}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;
