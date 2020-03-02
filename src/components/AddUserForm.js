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

    // Step 10-2: Since we'll be passing the "handleChangeName" method into the input field, we'll need to bind the reference of this component to it
    this.handleNameChange = this.handleNameChange.bind(this);
    // Step 10-4: Like the "handleNameChange" method, we need to bind this class to the method to retain context within it
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    // Step 10-8: "resetForm" will also be passed in as a method as opposed to being called. So we need to bind this component to it to retain context
    this.resetForm = this.resetForm.bind(this);
  }

  // Step 10-2: This "handleNameChange" method will be passed in to the input field to handle any change events to the input value.
  handleNameChange(e) {
    // Step 10-2: Grab the value from the target, which in this case will be the input field
    const name = e.target.value;
    // Step 10-2: Update the state to reflect what is currently inputted into the field
    this.setState({name});
  }

  // Step 10-4: We'll setup the same kind of handler methods for the rest of the form fields; email, phone and website.
  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({email});
  }

  handlePhoneChange(e) {
    const phone = e.target.value;
    this.setState({phone});
  }

  handleWebsiteChange(e) {
    const website = e.target.value;
    this.setState({website});
  }

  // Step 10-8: Add a method to clear out all the states, in turn, clearing out all the values in the input form fields
  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      website: ''
    });
  }

  // Step 10-1: Render a basic form for now.
  render() {
    return (
      // Step 10-8: pass in the "resetForm" method into the "onReset" prop of the form
      <form className="add-user" onReset={this.resetForm}>
        {/* Step 10-3: Create the input field that will be associated with the name state */}
        <div className="field-group">
          <label>Name: </label>
          {/*
          Step 10-3: Setting up 2 props on the input field; "onChange" and "value"
          We pass in the "handleNameChange" method to the "onChange" prop to update the state accordingly.
          We set the "state.name" value into the value of the input. This is to ensure we have only 1 source of truth
          for the current state of the values in the forms.
          */}
          <input type="text" onChange={this.handleNameChange} value={this.state.name} />
        </div>
        {/* Step 10-5: Setup the HTML elements for the other input fields for email, phone and website */}
        <div className="field-group">
          <label>Email: </label>
          <input type="text" onChange={this.handleEmailChange} value={this.state.email} />
        </div>
        <div className="field-group">
          <label>Phone: </label>
          <input type="text" onChange={this.handlePhoneChange} value={this.state.phone} />
        </div>
        <div className="field-group">
          <label>Website: </label>
          <input type="text" onChange={this.handleWebsiteChange} value={this.state.website} />
        </div>
        {/* Step 10-8: Add a reset type button in the form to reset the form */}
        <div className="actions">
          <button type="reset">Reset</button>
        </div>
      </form>
    );
  }
}
