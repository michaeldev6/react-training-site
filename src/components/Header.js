// Step 1-3: Every component will need to import React from the 'react' library
import React from 'react';

// Step 2-4: Create some javascript objects to be used as as styles for HTML components.
// These can be moved to a separate file for all components to access. Just need to "export" them
// keeping in mind that css properties need to be declared with camelCase
const specialButtonStyle = {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  backgroundColor: '#fff'
};

const insideButtonCircle = {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: '#333'
};



// Step 1-3: Create a "functional" component called "Header" that includes a title and a button
export function Header() {

  // Step 1-3: Functional components should always return HTML code.
  return (
    // step 2-2: Utilize existing classes to style HTML elements in React. Remember to user "className" as opposed to "class"
    <header className="flex row space-between-center">
      {/* step 2-3: Add an example of how to do inline styling in React */}
      <div style={{fontSize: '1.5rem', fontWeight: '600'}}>
        John Deere Training
      </div>
      <div>
        {/* step 2-4: Pass in the "specialButtonStyle" const declared in the top of the file to add those styles to this element */}
        <button style={specialButtonStyle}>
          {/* step 2-4: Use the const "insideButtonCircle" to make this div inside the button into a circle */}
          <div style={insideButtonCircle}> </div>
        </button>
      </div>
    </header>
  );
}
