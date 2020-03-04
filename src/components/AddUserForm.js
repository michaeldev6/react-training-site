import React from 'react';

// Step 11-2: Add Regex email validator
const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Step 10-1: Because forms will need state for the values in the input fields, so we'll make our component a class component.
export class AddUserForm extends React.Component {
  constructor(props) {
    super(props);

    // Step 11-2: Add additional states to this form for dealing with error states
    this.state = {
      name: '',
      nameHasError: false, // Step 11-2: to indicate if there is an error on the name input
      email: '',
      emailHasError: false, // Step 11-2: to indicate if there is an error on the email input
      phone: '',
      website: '',
      formSubmitted: false // Step 11-2: we want to show errors only on submission. This state prop helps keep track of that
    };

    // Step 10-2: Since we'll be passing the "handleChangeName" method into the input field, we'll need to bind the reference of this component to it
    this.handleNameChange = this.handleNameChange.bind(this);
    // Step 10-4: Like the "handleNameChange" method, we need to bind this class to the method to retain context within it
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    // Step 10-8: "resetForm" will also be passed in as a method as opposed to being called. So we need to bind this component to it to retain context
    this.resetForm = this.resetForm.bind(this);
    // Step 10-10: Because we need the handleSubmit method is referencing something in the class, we need to bind this context to it
    this.handleSubmit = this.handleSubmit.bind(this);
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

  // Step 11-3: Added function to check valid email format
  isEmailValid(email) {
    return email.length > 0 && validEmailRegex.test(email);
  }

  // Step 11-3: Added function to check is a name has been entered
  isNameValid(name) {
    return name.length > 0;
  }

  // Step 10-8: Add a method to clear out all the states, in turn, clearing out all the values in the input form fields
  resetForm() {
    // Step 11-2: Update the reset state to include the 3 new state properties added, "nameHasError", "emailHasError", "formSubmitted"
    this.setState({
      name: '',
      nameHasError: false,
      email: '',
      emailHasError: false,
      phone: '',
      website: '',
      formSubmitted: false
    });
  }

  // Step 10-9: Add a method to handle when the form gets submitted.
  // There is an event that gets triggered when a form is submitted, we need to pass that through
  handleSubmit(e) {
    // Step 10-9: Call the "preventDefault" method on the event to stop the default action of a form submit from happening.
    // We do this so we can handle the submission process ourselves and not leave it to the default actions of the browser.
    e.preventDefault();
    // Step 10-9: Create a user object so be used in the callback function property.
    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website,
    };
    // Step 10-9: Do a check to confirm that the "whenFormSubmitted" prop is defined and is a "function"
    if (!!this.props.whenFormSubmitted && typeof this.props.whenFormSubmitted === 'function') {
      // Step 10-9: If the prop meets all the criteria, we will trigger the method and pass in the "user" object as an argument
      this.props.whenFormSubmitted(user);
      // Step 10-9: After it gets triggered, we will reset and clear the form.
      this.resetForm();
    }
  }

  // Step 10-1: Render a basic form for now.
  render() {
    return (
      // Step 10-9: pass in the "handleSubmit" method into the "onSubmit" prop of the form
      <form className="add-user" onReset={this.resetForm} onSubmit={this.handleSubmit}>
        {/* Step 10-3: Create the input field that will be associated with the name state */}
        <div className="field-group">
          {/* Step 11-3: Adding * to the name label to indicate it is a required field */}
          <label>Name*: </label>
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
          {/* Step 11-3: Adding * to the email label to indicate it is a required field */}
          <label>Email*: </label>
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
          {/* Step 10-10: Add submit button to trigger the "onSubmit" function on the form */}
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
