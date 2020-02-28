import React from 'react';

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

  // Step 9-1: As is with any component class, need to setup the render method to return some HTML Element
  render() {
    // Step 9-1: Setup a simple place holder for now.
    return (
      <div>
        Error Happened
      </div>
    );
  }
}
