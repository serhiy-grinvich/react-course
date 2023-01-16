import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time /*date*/ }) => {
  let formatter = new Intl.NumberFormat('en-GB');
  const formattedAmount = formatter.format(amount);
  const date = moment(time).format('D MMM');
  const formattedTime = moment(time).locale('uk').format('LT');
  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{formattedTime}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formattedAmount}</span>
    </li>
  );
};

export default Transaction;
