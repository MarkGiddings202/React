import React, { useState } from "react";

function Form() {
  let [fName, setFirstName] = useState("");
  let [lName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [h1Text , seth1Text] = useState("")

  const handleFname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fName);
    console.log(lName);
    console.log(email);
    seth1Text(`First Name: ${fName}  Last Name: ${lName}  Email: ${email}`)
    // Reset's after each value
    setFirstName('')
    setLastName('')
    setEmail('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input fname="first name" type="text" onInput={handleFname}></input>
        <input lname="last name" type="text" onInput={handleLname}></input>
        <input email="email" type="text" onInput={handleEmail}></input>
        {/* forms have buttons with type submit  */}
        <button type="submit">click</button>
      </form>
      <h1>
       {h1Text}
      </h1>
    </>
  );
}

export default Form;

/*
    1. Create a new Vite React Project

    2. Create a Form.jsx file to create a Form
       Component that you export within it

    3. Inside Form, create an 3 <input> text fields, one
       for first name, last name, and email. Create a 'submit'
       <button> below the inputs. Wrap the inputs and button inside
       a <form> element. Then, add an <h1> element below the
       <form> element (empty text to start)

    4. Make it so that when you type in to the 3 <input> elements
       and then click 'submit', the data for the 3 inputs gets
       displayed inside the <h1> element as text. You can format
       this text however you want, but make sure the page does not
       reload when you click 'submit'

    5. Import the Form component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser

    BONUS* Can you think of a few ways you could do this?
*/
