import React from "react";

const ButtonGroup = ({ filter }) => {
  return (
    <div>
      <div onClick={filter => setFilter(filter, "IN")}>In</div>
      <div
        onClick={() => {
          console.log("clicked");
          filter = "IN";
        }}
      >
        Out
      </div>
    </div>
  );
};

const setFilter = (filter, newFilter) => {
  filter = newFilter;
};

export default ButtonGroup;
