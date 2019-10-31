import React from "react";
import Amount from "./Amount";
import styled from "styled-components";

const TransactionContainer = styled.div`
  border: 4px solid black;
  background: silver;
  margin: 0.5rem auto;
  width: 50rem;
`;

// QA: styled - Co kdyz chci bezne classou ? - Container per component, nebo i cela App a pak odteckovavat uvnitr jeho styled definice.

// const StyledContainer = styled(Container)`
//   margin-left: 1.5rem;
//   background-color: red;
//   color: ${({ isNegative }) => (isNegative ? "red" : "green")};
// `;

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

// CssToShare
// as="h1"

const Transaction = ({ transaction, removeTransaction }) => {
  return (
    <TransactionContainer>
      <b>{transaction.description}</b> <Amount amount={transaction.amount} currency={transaction.currency} /> 
        <RemoveButton onClick={() => removeTransaction(transaction)}></RemoveButton>
    </TransactionContainer>
  );
};

export default Transaction;
