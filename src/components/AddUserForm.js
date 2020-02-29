import React from 'react';

// Step 10-1: Because forms will need state for the values in the input fields, so we'll make our component a class component.
export class AddUserForm extends React.Component {
  constructor(props) {
    super(props);

    // Step 10-1: Setup the state for our form. We'll have 4 inputs, "name", "email", "phone" and "website"
    this.state = {
      name: '',
      email: '',
      phone: '',
      website: ''
    };
  }

  // Step 10-1: Render a basic form for now.
  render() {
    return (
      <form>
        Form Here
      </form>
    );
  }
}
