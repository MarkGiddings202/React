import React from "react";
import Warmup from "./Stateless-Components/Warmup";
import ExerciseOne from "./Stateless-Components/Exercise-1";
import ExerciseTwo from "./Stateless-Components/Exercise-2";
import ExerciseThree from "./Stateless-Components/Exercise-3";

function App() {
  return (
    <>
    <div>
      <Warmup />
      <hr></hr>
      <ExerciseOne />
      <hr></hr>
      <ExerciseTwo />
      <ExerciseThree />
      <h1>I'm working</h1>
    </div>
    </>
  );
}

export default App;
