import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";
//Import your array data to from the provided data file
import { numbers } from "~/src/data.js";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);

  return (
    <div>
    //STEP 3
      {numberState.map((number, index) => {
        return
          <NumberButton key={index}, number={number}/>
      })}
    </div>
  );
};

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 in any props needed by the child component*/
