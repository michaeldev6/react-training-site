

// Step 8-1: Create a method to hit an API and return the data as a JSON object
export function fetchUserData() {
  // Step 8-1: The "fetch" method is native to javascript as of 2015.
  // It uses a promise to make a request to the resource data.
  // In this case, we are hitting an API that is used as mock data.
  // this method is not compatible with Internet Explorer
  return fetch('https://jsonplaceholder.typicode.com/users')
    // Step 8-1: regardless of the response status code, fetch will always "resolve", but will simply set the "ok" status to false if there was an error
    // Meaning, if we wanted to check for 404 or 500 errors, we'd do check in the "then" callback function
    .then((response) => {
      // Step 9-5: Because an error, like 404 or 500 will still resolve, we need to check here if there were any issues.
      // if there is, we throw an Error with an appropriate message
      console.log('Response: ', response);
      if (!response.ok) {
        switch (response.status) {
          case 404:
            throw new Error('Specified route cannot be found');
          case 500:
            throw new Error('Server error');
          default:
            throw new Error('There was an issue with the request made');
        }
      }
      return response.json();
    })
    // Step 8-1: The only time this would get hit is if the response fails to complete due to internet connectivity
    // or anything else that prevented the request from completing
    .catch((e) => {
      // Step 9-5: Update this catch to throw an error if there is an issue with the response
      throw e;
    });
}

// Step 8-1: Delete the mock data, as we no longer need it.
