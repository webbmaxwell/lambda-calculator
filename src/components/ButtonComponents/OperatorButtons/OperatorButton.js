import React from "react";

function OperatorButton(props) {

  return (
    <button className="operator">{props.char}</button>
  );
};

/* Display a button element rendering the data being passed down from the parent container on props */

export default OperatorButton;
