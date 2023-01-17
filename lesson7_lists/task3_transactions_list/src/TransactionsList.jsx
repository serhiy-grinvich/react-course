import React from 'react';
import Transaction from './Transaction';
// import moment from 'moment';

// const formatter = new Intl.NumberFormat('en-GB');

class TransactionsList extends React.Component {
  render() {
    // const transactions = this.props.transactions.map((transaction) => ({
    //   ...transaction,
    //   amount: formatter.format(transaction.amount),
    //   date: moment(transaction.time).format('DD MMM'),
    //   time: moment(transaction.time).locale('en-gb').format('LT'),
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
