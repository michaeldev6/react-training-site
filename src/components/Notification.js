import React from 'react';

// Step 4-1: Create and export some styles for other components to along with this component.
// It is possible to move these out to a separate file. Based on preference or project requirements.
export const notificationStyles = {
  alert: {
    backgroundColor: '#fff799',
    color: '#7f7215',
    border: '0.0625rem solid #7f7215'
  },
  error: {
    backgroundColor: '#ffddcf',
    color: '#7f0a19',
    border: '0.0625rem solid #7f0a19'
  },
  info: {
    backgroundColor: '#dbfff7',
    color: '#00557f',
    border: '0.0625rem solid #00557f'
  },
  success: {
    backgroundColor: '#c8ffc8',
    color: '#107f3a',
    border: '0.0625rem solid #107f3a'
  }
};


// Step 4-1: Create a simple functional component called "NotificationHeader". To only be used internally and if there is a "header" prop set
// has a "notification-header" style class on it
function NotificationHeader(props) {
  return (
    <div className="notification-header">
      {props.children}
    </div>
  )
}

// Step 4-1: Create Notification component with props set
export function Notification(props) {
  return (
    // Step 4-1: Return a div with a "notification" style class. And accepts styling from the "notificationStyle" prop
    <div className="notification" style={props.notificationStyle}>
      { /* Step 4-1: Do a check if the "header" prop has been set. If it has, then render the "NotificationHeader" component. */ }
      {!!props.header && <NotificationHeader>{props.header}</NotificationHeader>}
      { /*
        Step 4-1: The "children" prop is one which is not declared by the parent, but assumed.
        Any HTML code within the component declaration tags will be considered "children".
        E.g, If this "Notification" component is called like this in another component;

        <Notification>
          <p>This is a notification</p>
          <button>Close</button>
        </Notification>

        This "props.children" will then render

        <p>This is a notification</p>
        <button>Close</button>

        This allows us to create a common looking/functioning component, but customize it for specific cases. In this case, we
        are create different feel with the styles, based on the type of notification we may want.
       */ }
      {props.children}
    </div>
  );
}
