import React from "react";
import styled from "styled-components";

const DirButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 3rem;
  background-color: silver;
  border: 5px solid black;
  margin: 0.2rem;
  font-variant-caps: all-petite-caps; 
  font-weight: bolder;
  font-size: 2rem;
  cursor: pointer;
`;


const ButtonGroup = ({setNewFilter}) => {
  return (
    <div>
      <DirButton onClick={() => { setNewFilter('IN') }}>In</DirButton>
      <DirButton onClick={() => { setNewFilter('OUT') }}>Out</DirButton>
      <DirButton onClick={() => { setNewFilter('ALL') }}>All</DirButton>
    </div>
  );
};

export default ButtonGroup;
