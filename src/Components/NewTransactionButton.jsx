import React from "react";

const NewTransactionButton = ({addTransaction}) => {
  return <div 
    onClick={() => addTransaction(
      {description: "Vecere v restauraci", amount: 666, currency: "CZK", direction: "OUT"}
    )}>
    NewTransaction
    </div>;
};

export default NewTransactionButton;
