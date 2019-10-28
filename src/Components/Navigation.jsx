import React from "react";
import ButtonGroup from "./ButtonGroup";

const Navigation = (state) => {
  return (
    <div>
      <ButtonGroup state={state}></ButtonGroup>
      <button>graph</button>
    </div>
  );
};

export default Navigation;
