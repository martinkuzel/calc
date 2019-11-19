import React from "react";
import Amount from "./Amount";
import styled from "styled-components";

export const TransactionContainer = styled.div`
  border: 3px solid black;
  background: silver;
  margin: 0.5rem auto;
  width: 50rem;
`;

const RemoveButton = styled.div`
  background: #92c7eb; 
  background-image: url('http://res.freestockphotos.biz/pictures/15/15107-illustration-of-a-red-close-button-pv.png'); 
  background-size: cover; 
  background-position: center; 
  display: inline-block; 
  border: none; 
  margin-left: 5px;
  padding: 5px; 
  width: 5px; 
  border-radius: 900px; 
  height: 5px; 
  transition: all 0.5s; 
  cursor: pointer;
`;

const Transaction = ({ transaction, removeTransaction }) => {
  return (
    <TransactionContainer>
      <b>{transaction.description}</b> <Amount amount={transaction.amount} currency={transaction.currency} /> 
        <RemoveButton onClick={() => removeTransaction(transaction)}></RemoveButton>
    </TransactionContainer>
  );
};

export default Transaction;
