// Step 1-3: Every component will need to import React from the 'react' library
import React from 'react';


// Step 1-3: Create a "functional" component called "Header" that includes a title and a button
export function Header() {

  // Step 1-3: Functional components should always return HTML code.
  return (
    <header>
      <div>
        John Deere Training
      </div>
      <div>
        <button>
          User
        </button>
      </div>
    </header>
  );
}
