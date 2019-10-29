import React from "react";
import Amount from "./Amount";
import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
// `;

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
    <div>
      <b>{transaction.description}</b> <Amount amount={transaction.amount} currency={transaction.currency} /> 
        <RemoveButton onClick={() => removeTransaction(transaction)}></RemoveButton>
    </div>
  );
};

export default Transaction;
