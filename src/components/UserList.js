import React from 'react';
import {MOCK_USER_DATA} from "../mock-data";


// Step 7-2: Create a functional component to render the list of mock users
export function UserList(props) {

  // Step 7-2: Import in the MOCK_USER_DATA and create a copy of it to use in this component
  const list = MOCK_USER_DATA.slice();

  // Step 7-2: Return the HTML to be rendered
  return (
    <div className="user-list">
      User List here
    </div>
  );
}
