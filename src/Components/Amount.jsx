import React from "react";

const Amount = ({ amount, currency }) => {
  return (
    <span>
      {amount} {currency}
    </span>
  );
};

export default Amount;
