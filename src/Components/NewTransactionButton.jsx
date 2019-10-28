import React from "react";
import {DirButton} from "./ButtonGroup";
import styled from "styled-components";

// Q: jak podedim z jine class ?
// const AddButton = styled(DirButton)`
//     border-radius: 15px;

// `;

const AddButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: silver;
  border: 5px solid black;
  margin: 0.2rem;
  font-variant-caps: all-petite-caps; 
  font-weight: bolder;
  font-size: 2rem;
  border-radius: 1.5rem;
  cursor: pointer;
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
