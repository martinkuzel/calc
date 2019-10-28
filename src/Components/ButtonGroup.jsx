import React from "react";

const ButtonGroup = ({applyFilter}) => {
  return (
    <div>
      <div onClick={() => { applyFilter('IN') }}>In</div>
      <div onClick={() => { applyFilter('OUT') }}>Out</div>
      <div onClick={() => { applyFilter('ALL') }}>All</div>
    </div>
  );
};

export default ButtonGroup;
