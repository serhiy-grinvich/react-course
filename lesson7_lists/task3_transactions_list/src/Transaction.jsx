import React from 'react';
import moment from 'moment';

let formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time /*date*/ }) => {
  const formattedAmount = formatter.format(amount);
  const date = moment(time).format('D MMM');
  const formattedTime = moment(time).locale('en-gb').format('LT');
  const formattedRate = formatter.format(rate);
  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{formattedTime}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{formattedRate}</span>
      <span className="transaction__amount">{formattedAmount}</span>
    </li>
  );
};

export default Transaction;
