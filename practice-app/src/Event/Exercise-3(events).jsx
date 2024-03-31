import React from "react";

function EventsExerciseThree() {
  
  const handleSubmit = (e) => {
    // console.log(e)
    // console.log(e.target)
    e.preventDefault()
    // method 1
    // turns form data into an object
    const fd = new FormData(e.target)
    console.log(fd)
    for(const entry of fd.entries()){
      //gives back an array of each value inside of the form
      console.log(entry)
    }

    // method 2
    console.log(...fd.entries())

    // method 3
    console.table(Object.fromEntries(fd))
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input placeholder="First Name" name="firstname" type="text"></input>
        <input placeholder="Last Name" name="lastname" type="text"></input>
        <input placeholder="Age" name="age" type="number"></input>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default EventsExerciseThree;

/*
    1. Create a new Vite React project

    2. Create a ContactForm.jsx file that has a component
       that returns a <form /> element

    3. Add the following inputs to the form:
       - A text input for "first name"
         Give this a placeholder and name property
       - A text input for "last name"
         Give this a placeholder and name property
       - A number input for "age"
         Give this a placeholder and name property
       - A submit button with type submit

    3. Make it so that on form SUBMISSION, you prevent
       the default form reload behaviour and then you 
       log out the first name, last name and age submitted

    4. Export this function and replace <App /> in the
       main.jsx file with this imported ContactForm component

    5. Check in your Browser to see if it works as expected

    HINT1* How do you prevent event defaults?
    HINT2* You have access to the form element in the event
    HINT3* Check out the FormData Web API on MDN
*/
