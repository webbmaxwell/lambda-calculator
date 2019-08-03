import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js"
//Import your array data to from the provided data file
import { operators } from "../../../data.js";


function Operators() {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);

  //STEP 3
  return (
    <div>
      {operatorState.map((index) => {
        return (
          <OperatorButton key={index.char} value={index.value}/>
        )
      })}
    </div>
  );
};

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 in any props needed by the child component*/

export default Operators;
