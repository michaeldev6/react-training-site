import React from 'react';
// Step 9-3: Import the Notification component and styles
import {Notification, notificationStyles} from "./Notification";

// Step 9-1: Let's setup a new class component to handle errors.
export class ListErrorBoundary extends React.Component {

  // Step 9-1: Setup the constructor with some states.
  // "error" will hold the error object and message
  // "errorInfo" will hold the error details and stack
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  // Step 9-2: Add the "componentDidCatch" life cycle method, which will be called when any child components throws en error
  componentDidCatch(error, errorInfo) {
    // Step 9-2: This method will pass these 2 parameters. We will capture them and update the state in this component
    this.setState({
      error,
      errorInfo
    });
  }

  // Step 9-1: As is with any component class, need to setup the render method to return some HTML Element
  render() {

    // Step 9-3: Do a check for any errors. If there is, render a Notification component to display the error
    if (!!this.state.errorInfo) {
      return (
        // Step 9-3: Utilizing the Notification component created in section 4 and give it the styles for an alert
        <Notification notificationStyle={notificationStyles.alert}>
          <p>Issue loading list</p>
          <details>
            <summary>Click for more details</summary>
            {/* Step 9-3:  Render out the error message and the error stack */}
            <p>{ !!this.state.error && this.state.error.toString() }</p>
            <p>{ this.state.errorInfo.componentStack }</p>
          </details>
        </Notification>
      );
    }

    // Step 9-3: Remove placeholder and instead, if there are no errors from the children components, render them
    return this.props.children;
  }
}
