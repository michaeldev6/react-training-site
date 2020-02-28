// Step 1-3: Every component will need to import React from the 'react' library
import React from 'react';
import {TimeDisplay} from "./TimeDisplay";

// Step 6-5: Update the styles to accommodate the prop "buttonText"
const specialButtonStyle = {
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
  padding: '0.5rem 1rem'
};

// Step 6-5: Removing this style object as it's no longer needed at this point


// Step 3-2: Update the functional component to have the "props" argument passed in.
// This takes all the props declared on the HTML declaration of this component and provides it as an argument in this function
export function Header(props) {

  // Step 1-3: Functional components should always return HTML code.
  return (
    // step 2-2: Utilize existing classes to style HTML elements in React. Remember to user "className" as opposed to "class"
    <header className="flex row space-between-center">
      {/* step 2-3: Add an example of how to do inline styling in React */}
      <div style={{fontSize: '1.5rem', fontWeight: '600'}}>
        {/* // Step 3-2: Replace hard coded text with whatever value is passed in by the "name" prop */}
        {props.name}
      </div>
      {/* Step 6-5: Utilize the new "showTime" prop to render the "TimeDisplay" component or not */}
      { props.showTime && <TimeDisplay /> }
      <div>
        {/*
          Step 3-2: Pass in the function from the "onButtonClick" prop to the "onClick" method on the button element.
          This should now trigger the alert that was setup in the App.js
        */}
        <button onClick={props.onButtonClick} style={specialButtonStyle}>
          {/* Step 6-5: Instead of just showing a circle, we'll render the new prop "buttonText" here */}
          { props.buttonText }
        </button>
      </div>
    </header>
  );
}
