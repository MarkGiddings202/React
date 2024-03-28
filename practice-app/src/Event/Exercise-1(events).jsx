import React from 'react'

function EventsExerciseOne() {

   // handle input
   const handleInput = (e) => {
      // log the event and look through the object and find the target property and acess it's value property
      console.log(`[${e.target.getAttribute("id")}] : ${e.target.value}`)
   }

  return (
    <div>
      {/* When you want to capture input you do it via the onChange attribute, and
      pass it a function to do what you want to the value, in this case, we want to
      console log the input value */}
      <input id="ex1" onChange={handleInput}></input>
    </div>
  )
}

export default EventsExerciseOne

/*
    1. Create a new Vite React project

    2. Create an Input.jsx file that has a component
       that returns an <input id="ex1" /> element

    3. Make it so that when you type in the input, you
       log out: [INPUT id=ex1]: input_value
       where input_value is the actual text inside
       the input box (on change/input)

    4. Export this function and replace <App /> in the
       main.jsx file with this imported Input component

    5. Check in your Browser to see if it works as expected
*/