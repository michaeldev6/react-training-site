import React from 'react';
import './App.css';
// step 1-4: Import the Header function component into the main App.js file
import {Header} from "./components/Header";

// Step 4-3: Import the notification component and the notificationStyles
import {Notification, notificationStyles} from "./components/Notification";
// Step 7-4: Import the UserList component
import {UserList} from "./components/UserList";

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
      showNotification: false,
      // Step 6-4: Add another state, whether or not the time should be displayed. We'll set it true by default
      showTime: true
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

  // Step 6-4: Method to update the visible state of the time
  toggleTime() {
    const showTime = !this.state.showTime;
    this.setState({showTime});
  }

  // Step 5-1: When using class components, we MUST call the "render" method and return the HTML code to be displayed
  render() {
    return (
      // Step 4-3: Adding a fragment, an empty "<> </>" tag, because React only allows a single parent element in the return/render function.
      // If we did not put a Fragment tag, <Header> and <Notification> would both be the top level elements in this component, and that is not allowed
      // The fragment tag will not get rendered.
      // Use the fragment to avoid excessive use of <div> tags just to wrap elements.
      <>
        {/*
        Step 6-4: Make some updates to the Header component here.
        We'll update the "onButtonClick" method to call the "toggleTime" method rather than displaying an alert.
        We will also add a new property to the Header called showTime, which we'll update in the Header.js component in the next step.
        And for a bit of extra practise, we'll update the button text to show appropriate text based on the state of the time.
        To be update in the next step as well.
        */}
        <Header
          name="John Deere Training"
          onButtonClick={(e) => this.toggleTime()}
          showTime={this.state.showTime}
          buttonText={this.state.showTime ? 'Hide Time' : 'Show Time'}
        />
        {/* Step 5-4: Added a button to trigger the "toggleNotification" method when clicked */}
        <button className="btn-primary" onClick={this.toggleNotification}>
          {/* Step 5-4: Use appropriate text based on the visibility state of the notification */}
          {this.state.showNotification ? 'Hide Notification' : 'Show Notification'}
        </button>
        {/* Step 5-5: Added a check to see if the Notification component should be rendered or not */}
        {
          this.state.showNotification &&
          <Notification header={<ExampleNotificationHeader />} notificationStyle={notificationStyles.info}>
            {/* Step 4-3: Any content placed between the <Notification> tags, will be passed down into the component in the "props.children" property */}
            <p>Notification Custom Content</p>
            <p>More Custom Content</p>
          </Notification>
        }
        {/* Step 7-4: Wrap the UserList to add some padding around it */}
        <div className="content">
          {/* Step 7-4: Declare the UserList component to have it rendered beneath the notification */}
          <UserList />
        </div>
      </>
    );
  }
}

export default App;
