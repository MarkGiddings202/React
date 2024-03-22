import React from "react";
import monkey from '../assets/Monkey-In-Hand.jpeg'

function ExerciseTwo() {
  return (
    <>
      <div>
        <img src={monkey} alt="monkey" style={{height:'200px',width:'300px'}}></img>
        <h2>It's a baby monkey</h2>
        <p>I think baby monkeys are pretty cool</p>
      </div>
    </>
  );
}

export default ExerciseTwo;
/*
    1. Create a new React project using Vite

    2. Download an image (png or jpg) off the internet
       and put it in to the src/assets folder of the project

    3. Make the new jsx file called Card.jsx

    4. Make a Card function inside this that returns:
       - An <img> tag with an image of your choice
       - An <h2> underneath with your name
       - A <p> tag below the <h2> with some text
         about you

    5. Export this function and import it in to main.jsx
       to replace the <App /> being rendered.

    6. Make sure you can see your Card showing in the Browser
*/
