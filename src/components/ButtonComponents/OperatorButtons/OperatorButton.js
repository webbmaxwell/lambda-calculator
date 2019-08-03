import React, { useState } from "react";

function OperatorButton(props) {

  return (
    <button>
    {props}
    </button>
  );
};

/* Display a button element rendering the data being passed down from the parent container on props */

export default OperatorButton;
