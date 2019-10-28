import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionData }) => {

  return (
    <div>
      {transactionData.map(transaction => (
        <Transaction
          description={transaction.description}
          amount={transaction.amount}
          currency={transaction.currency}
          direction={transaction.direction}
        />
      ))}
    </div>
  );
};

export default TransactionList;
