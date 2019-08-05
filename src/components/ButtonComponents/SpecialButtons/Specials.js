import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";
//Import your array data to from the provided data file
import { specials } from "../../../data.js";

function Specials() {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);

  //STEP 3
  return (
    <div>
      {specialState.map((special, index) => {
        return (
          <SpecialButton key={index} special={special} className="specials"/>
      )})}
    </div>
  );
};

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 in any props needed by the child component*/

export default Specials;
