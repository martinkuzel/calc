import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionData, removeTransaction }) => {

  return (
    <div>
      {transactionData.map(transaction => (
        <Transaction
          transaction={transaction}
          removeTransaction={removeTransaction}
        />
      ))}
    </div>
  );
};

export default TransactionList;
