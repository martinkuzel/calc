import React from "react";
import Amount from "./Amount";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const StyledContainer = styled(Container)`
//   margin-left: 1.5rem;
//   background-color: red;
//   color: ${({ isNegative }) => (isNegative ? "red" : "green")};
// `;

// const Button = styled.div``;

// CssToShare

// as="h1"

const Transaction = ({ description, amount, currency, direction }) => {
  return (
    <div>
      <b>{description}</b> <Amount amount={amount} currency={currency} />
    </div>
  );
};

export default Transaction;
