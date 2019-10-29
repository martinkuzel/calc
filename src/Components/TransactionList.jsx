import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionData, removeTransaction }) => {

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
