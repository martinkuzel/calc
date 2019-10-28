import React from "react";
import ButtonGroup from "./ButtonGroup";

const Navigation = ({setNewFilter}) => {
  return (
    <div>
      <ButtonGroup setNewFilter={setNewFilter}></ButtonGroup>
      <button>graph</button>
    </div>
  );
};

export default Navigation;
