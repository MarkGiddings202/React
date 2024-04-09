import React, { useState } from "react";

function Textbox() {
  let [userText, setUserText] = useState("");

  const printText = (e) => {
    e.preventDefault()
    setUserText(e.target.value)
  }

  return (
    <>
      <h1>User Text Here: {userText}</h1>
      <input 
      type="text"
      value={userText}
      onChange={printText}
      placeholder="Type something..."
      ></input>
    </>
  );
}

export default Textbox;

/*
    1. Create a new Vite React Project

    2. Create a TextBox.jsx file to create a TextBox
       Component that you export within it

    3. Inside Textbox, create an <h1> with an <input> element
       below it.

    4. Make it so that when you type in to the <input>, the <h1>
       updates to match the text that has been entered

    5. Import the TextBox component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/
