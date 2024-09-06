// import "./styles.css";

import RRuleGenerator, { translations } from "react-rrule-generator";
import "react-rrule-generator/build/styles.css";
// import "react-rrule-generator/dist/index.css";

import { useState } from "react";

const defaultOptions = {
  weekStartsOnSunday: false, // our weekday starts from monday
  hideError: false, // don't disable error
  hideStart: false, // don't disable start input
  hideEnd: false, // don't disable end input
  // nwa requirements
  end: ["Never", "After", "On date"],
  repeat: ["Weekly", "Monthly", "Yearly"],
  // nwa requirements end
};

export default function RuleCalendar() {
  const [rrule, setRrule] = useState(null);

//   // Given RRULE string
// const rruleString = rrule;
// // Extract the RRULE part from the string
// const rrulePart = null? null : rruleString.split('\n')[1].replace('RRULE:', '');

// // Split the RRULE part into components
// const rruleComponents = null ? null : rrulePart.split(';');

// // Convert the components into an array of objects
// const rruleArray = null ? null : rruleComponents.map(component => {
//     const [key, value] = null ? null : component.split('=');
//     return { key, value: key === 'UNTIL' ? value : (isNaN(value) ? value : Number(value)) };
// });

// Output the result
// console.log(rruleArray);

  return (
    <div className="App">
      {/* {console.log({rrule})} */}
      <h4>{rrule}</h4>
      <RRuleGenerator
        onChange={(rrule) => setRrule(rrule)}
        config={{
          start: ["datetime"],
          ...defaultOptions,
        }}
        value={rrule}
        translations={translations.english}
      />

      {/* {console.log(rrule)} */}
      {/* {console.log(rruleArray)} */}
      {/* {
        rruleArray.map((item) => 
        <div>
            {item.key} : {item.value}
        </div>)
      } */}
    </div>
  );
}
