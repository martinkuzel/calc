import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionData, filter }) => {
  const actTransactions = transactionData.filter(
    transaction => transaction.direction === filter || "ALL" === filter
  );

  return (
    <div>
      {actTransactions.map(transaction => (
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
