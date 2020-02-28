import React from 'react';
import {MOCK_USER_DATA} from "../mock-data";


// Step 8-2: Since we want to utilize state and use the life cycle methods for section 8, we'll convert this functional component into a class component
export class UserList extends React.Component {

  // Step 8-2: With this being a class now, remember to declare the constructor method with props being passed in
  constructor(props) {
    // Step 8-2: Always remember to declare the super passing in the props
    super(props);

    // Step 8-2: Setting up some states, "isListLoading" and "users".
    // "isListLoading" is to show some loading text while the API request is getting data. True by default
    // "users" is the property that will hold the data we get back from the response. null by default
    this.state = {
      isListLoading: true,
      users: null
    }
  }

  // Step 8-2: Because we're converting to a class component, we need to Wrap existing code and logic inside of the "render" method.
  render() {
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
}
