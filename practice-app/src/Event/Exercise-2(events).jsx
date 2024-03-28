import React from "react";

function EventsExerciseTwo() {

   const handleClick = (e)=>{
      console.log(e.target.textContent)
   }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Subject</td>
            <td>Mark</td>
            <td>Grade</td>
          </tr>
        </thead>
        <tbody onClick={handleClick} >
          <tr>
            <td>Math</td>
            <td>74</td>
            <td>B+</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>94</td>
            <td>A+</td>
          </tr>
          <tr>
            <td>WoodWorking</td>
            <td>65</td>
            <td>C+</td>
          </tr>
          <tr>
            <td>Dancing</td>
            <td>55</td>
            <td>D-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventsExerciseTwo;

/*
    1. Create a new Vite React project

    2. Create a Grades.jsx file that has a component
       that returns a <table /> element

    3. Add three columns to the table: "Subject",
       "Mark" and "Grade" where Subject is a school
       subject (Eg. Math), Mark is a number between
       0-100 and Grade is a letter-grade (Eg: A, B)

    3. Add some table data to this table so you have
       at least 5 rows to fill in the columns

    4. How would you make it so that when you CLICK any
       of the table data cells, it logs out the text inside?
       NOTE: Event delegation is your friend here!

    4. Export this function and replace <App /> in the
       main.jsx file with this imported Grades component

    5. Check in your Browser to see if it works as expected

    Example:

    Subject   |   Mark   |   Grade
    --------------------------------
    Math      |   65     |   C
    Science   |   77     |   B
    Art       |   92     |   A+
*/
