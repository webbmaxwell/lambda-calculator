import React from "react";

function SpecialButton(props) {

  return (
    <button>
    {props.special}
    </button>
  );
};

/* Display a button element rendering the data being passed down from the parent container on props */

export default SpecialButton;
