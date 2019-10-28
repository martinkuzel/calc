import React from "react";

const ButtonGroup = () => {
  return (
    <div>
      <div
        onClick={() => {
          this.props.filter = "IN";
        }}
      >
        In
      </div>
      <div
        onClick={() => {
          this.props.filter = "OUT";
        }}
      >
        Out
      </div>
    </div>
  );
};

// const setFilter = (newFilter) => {
//   store.filter = newFilter;
// };

export default ButtonGroup;
