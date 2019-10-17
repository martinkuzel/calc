import React from "react";
import Amount from "./Amount";

const Transaction = ({ description, amount, currency, direction }) => {
  return (
    <p>
      {description} <Amount amount={amount} currency={currency} />
    </p>
  );
};

export default Transaction;
