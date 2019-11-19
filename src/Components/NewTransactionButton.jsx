import React from "react";
import styled from "styled-components";
import { DirButton } from "./ButtonGroup";
import { useHistory } from "react-router-dom";

const AddButton = styled(DirButton)`
    width: 18rem;
    border-radius: 1.5rem;
    background: linear-gradient(to bottom, silver, lightblue);
`;


const NewTransactionButton = ({addTransaction}) => {
  const {push} = useHistory();

  return <AddButton
    // onClick={() => addTransaction(
      // {description: "Vecere v restauraci", amount: 666, currency: "CZK", direction: "OUT"})}>
    onClick={ () => push("/add") }>
    New Transaction
    </AddButton>;
};

export default NewTransactionButton;
