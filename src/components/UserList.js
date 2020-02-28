import React from 'react';
import {MOCK_USER_DATA} from "../mock-data";


// Step 7-2: Create a functional component to render the list of mock users
export function UserList(props) {

  // Step 7-2: Import in the MOCK_USER_DATA and create a copy of it to use in this component
  const list = MOCK_USER_DATA.slice();

  // Step 7-3: Taking the list of data, we will "map" each of the values in the list to be an HTML element, storing it in another variable, "userList"
  const userList = list.map((data) => {
    return (
      // Step 7-3: Whenever mapping a list, the "key" property will need to be added to help React identify this unique element.
      // By default, it will use the index, but if the data is ever sorted, then the index would no longer be accurate, so a unique id
      // is always best
      <div key={data.id} className="user">
        {/* Step 7-3: Display the information. Can do optional checks to confirm if the data exists or not and render the information accordingly */}
        <div>Name: {data.name}</div>
        <div>Email: {data.email}</div>
        <div>Phone: {data.phone}</div>
        <div>Website: {data.website}</div>
      </div>
    );
  });

  // Step 7-2: Return the HTML to be rendered
  return (
    <div className="user-list">
      {/* Step 7-3: Render the "userList" variable here */}
      {userList}
    </div>
  );
}
