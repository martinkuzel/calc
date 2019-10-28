import React from "react";

const ButtonGroup = ({setNewFilter}) => {
  return (
    <div>
      <div onClick={() => { setNewFilter('IN') }}>In</div>
      <div onClick={() => { setNewFilter('OUT') }}>Out</div>
      <div onClick={() => { setNewFilter('ALL') }}>All</div>
    </div>
  );
};

export default ButtonGroup;
