import React from "react";
import ButtonGroup from "./ButtonGroup";

const Navigation = ({ filter }) => {
  return (
    <div>
      <ButtonGroup filter={filter}></ButtonGroup>
      <button>graph</button>
    </div>
  );
};

export default Navigation;
