import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";
//Import your array data to from the provided data file
import { specials } from "~/src/data.js";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);

  return (
    <div>
    //STEP 3
      {specialState.map((special, index) => {
        return
          <NumberButton key={index}, special={special}/>
      })}
    </div>
  );
};

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 in any props needed by the child component*/

export default Specials;
