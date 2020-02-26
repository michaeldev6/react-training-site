import React from 'react';
import './App.css';
// step 1-4: Import the Header function component into the main App.js file
import {Header} from "./components/Header";


function App() {
  return (
    // step 3-1: Add properties "name" and "onButtonClick", passing a string into "name" and a function into "onButtonClick"
    <Header name="John Deere Training" onButtonClick={(e) => alert('Button Clicked')} />
  );
}

export default App;
