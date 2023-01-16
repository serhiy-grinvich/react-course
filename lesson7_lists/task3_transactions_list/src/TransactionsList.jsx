import React from 'react';
import Transaction from './Transaction';
// import moment from 'moment';

class TransactionsList extends React.Component {
  render() {
    // let formatter = new Intl.NumberFormat('en-GB');
    // const transactions = this.props.transactions.map((transaction) => ({
    //   ...transaction,
    //   amount: formatter.format(transaction.amount),
    //   date: moment(transaction.time).format('D MMM'),
    //   time: moment(transaction.time).locale('uk').format('LT'),
    // }));
    // console.log(transactions);
    return (
      <ul className="transactions">
        {this.props.transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
