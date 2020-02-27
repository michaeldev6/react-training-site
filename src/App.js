import React from 'react';
import './App.css';
// step 1-4: Import the Header function component into the main App.js file
import {Header} from "./components/Header";

// Step 4-3: Import the notification component and the notificationStyles
import {Notification, notificationStyles} from "./components/Notification";

// Step 4-3: Sample function component to illustrate how this component can be passed into another component
function ExampleNotificationHeader() {
  return (
    <div>
      Notification Header
    </div>
  );
}

// Step 5-1: Whenever dealing with state management, we MUST use class component, since functional components are just presentational
// so converted the App component into a class component
// all class components MUST extend "React.component"
class App extends React.Component  {

  // Step 5-2: To create a state, we must call the constructor method, which has "props" passed into it.
  constructor(props) {
    // Step: 5-2: We must called the "super" method to initialize the base component and pass in the "props" variable.
    super(props);

    // Step: 5-2: React.Component has a "state" variable setup. In this component, we must define its structure and the properties in the state.
    // In this case, we are creating a state whether to show or hide the notification we create in Step 4. By default it is hidden.
    this.state = {
      showNotification: false
    };

    // Step 5-3: bind "this" to the "toggleNotification" method, so when the method is passed in to be called by a child component,
    // it will still be connected to the App component
    this.toggleNotification = this.toggleNotification.bind(this);
  }

  // Step 5-3: "toggleNotification" method created to update the state of the "showNotification" property
  toggleNotification() {
    const showNotification = !this.state.showNotification;
    // Step 5-3: To update the state, we must always call the `setState` method which is inherited from React.Component.
    // The {showNotification} is also a shorthand way of declaring an object where the variable name that contains the value
    // is the same as the key.
    // Essentially, {showNotification} is the same as { showNotification: showNotification }
    this.setState({showNotification});
  }

  // Step 5-1: When using class components, we MUST call the "render" method and return the HTML code to be displayed
  render() {
    return (
      // Step 4-3: Adding a fragment, an empty "<> </>" tag, because React only allows a single parent element in the return/render function.
      // If we did not put a Fragment tag, <Header> and <Notification> would both be the top level elements in this component, and that is not allowed
      // The fragment tag will not get rendered.
      // Use the fragment to avoid excessive use of <div> tags just to wrap elements.
      <>
        {/* // step 3-1: Add properties "name" and "onButtonClick", passing a string into "name" and a function into "onButtonClick" */}
        <Header name="John Deere Training" onButtonClick={(e) => alert('Button Clicked')} />
        {/*
      Step 4-3: Added the Notification component, passing in the "ExampleNotificationHeader" component to the "header" prop.
      Also set the "notificationStyle" prop to use the "notificationStyles.info" styles.
      */}
        <Notification header={<ExampleNotificationHeader />} notificationStyle={notificationStyles.info}>
          {/* Step 4-3: Any content placed between the <Notification> tags, will be passed down into the component in the "props.children" property */}
          <p>Notification Custom Content</p>
          <p>More Custom Content</p>
        </Notification>
      </>
    );
  }
}

export default App;
