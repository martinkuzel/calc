import React from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const transactionData = [{ description: "aa", amount: 12 }, {}, {}];

  return (
    <div>
      {transactionData.map(transaction => (
        <Transaction
          transaction //TODO ja
          description="JobPay"
          amount="122"
          currency="EUR"
          direction="IN"
        />
      ))}

      {/* <Transaction
        description="JobPay"
        amount="122"
        currency="EUR"
        direction="IN"
      />
      <Transaction
        description="Vypalny"
        amount="22"
        currency="EUR"
        direction="OUT"
      /> */}
    </div>
  );
};

export default TransactionList;
