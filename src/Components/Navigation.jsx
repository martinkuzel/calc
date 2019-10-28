import React from "react";
import ButtonGroup from "./ButtonGroup";

const Navigation = ({applyFilter}) => {
  return (
    <div>
      <ButtonGroup applyFilter={applyFilter}></ButtonGroup>
      <button>graph</button>
    </div>
  );
};

export default Navigation;
