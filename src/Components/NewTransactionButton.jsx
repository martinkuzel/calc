import React from "react";
import styled from "styled-components";
import { DirButton } from "./ButtonGroup";

// QA: jak podedim z jine class ?
// as="span" pri pouziti

// const AddButtonx = styled.div`
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   height: 3rem;
//   background: linear-gradient(to bottom, silver, lightblue);
//   border: 5px solid black;
//   margin: 0.2rem;
//   font-variant-caps: all-petite-caps; 
//   font-weight: bolder;
//   font-size: 2rem;
//   border-radius: 1.5rem;
//   cursor: pointer;
// `;

const AddButton = styled(DirButton)`
    width: 18rem;
    border-radius: 1.5rem;
    background: linear-gradient(to bottom, silver, lightblue);
`;


const NewTransactionButton = ({addTransaction}) => {
  return <AddButton
    onClick={() => addTransaction(
      {description: "Vecere v restauraci", amount: 666, currency: "CZK", direction: "OUT"}
    )}>
    New Transaction
    </AddButton>;
};

export default NewTransactionButton;
