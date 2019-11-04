import React from "react";
import ButtonGroup from "./ButtonGroup";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";

const GraphButton = styled.button`
  background: url('line-chart.svg') no-repeat;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
`;

const Navigation = ({setNewFilter, graph}) => {
  const {push} = useHistory();

  return (
    <div>
      <ButtonGroup setNewFilter={setNewFilter}></ButtonGroup>
      <GraphButton onClick={ () => graph ? push("/") : push("/graph") }></GraphButton>
    </div>
  );
};

export default Navigation;
