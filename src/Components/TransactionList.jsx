import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionData, removeTransaction, toggleGraph }) => {

  toggleGraph(false);

  return (
    <div>
      {transactionData.map((transaction, index) => (
        <Transaction
          transaction={transaction}
          removeTransaction={removeTransaction}
          key={index}
        />
      ))}
    </div>
  );
};

export default TransactionList;
