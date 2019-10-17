import React from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  return (
    <span>
      <Transaction
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
      />
    </span>
  );
};

export default TransactionList;
