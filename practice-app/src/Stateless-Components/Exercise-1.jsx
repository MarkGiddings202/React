import React from 'react';
import Mark from '../assets/MarkMarcyKitchen.jpg'



function ExerciseOne() {
  return (
    <>
    <div>
    <h1>Mark In Marcy </h1>
    <img src={Mark} alt='me' style={{ height: '200px', width: '300px' }} />
    </div>
    </>
  )
}

export default ExerciseOne

/*
    1. Create a new React project using Vite

    2. Download an image (png or jpg) off the internet
       and put it in to the src/assets folder of the project

    3. Make the App.jsx Component return an image tag that
       displays the image you downloaded.

    4. Add an <h1> tag as a title above the image

    5. Make sure this works in your Browser and test it
*/