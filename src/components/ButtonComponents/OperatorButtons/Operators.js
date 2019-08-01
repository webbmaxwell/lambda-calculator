import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js"
//Import your array data to from the provided data file
import { operators } from "~/src/data.js";


const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);

  return (
    <div>
    //STEP 3
      {operatorState.map((char, value) => {
        return
          <NumberButton char={char}, operator={value}/>
      })}
    </div>
  );
};

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 in any props needed by the child component*/
