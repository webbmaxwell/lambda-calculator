import React from "react";

function NumberButton(props) {
  
  return (
    <button>{props.number}</button>
  );
};

/* Display a button element rendering the data being passed down from the parent container on props */

export default NumberButton;
