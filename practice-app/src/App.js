import React from "react";
// import Warmup from "./Stateless-Components/Warmup";
// import ExerciseOne from "./Stateless-Components/Exercise-1";
// import ExerciseTwo from "./Stateless-Components/Exercise-2";
// import ExerciseThree from "./Stateless-Components/Exercise-3";
import EventsWarmup from "./Event/Warmup(events)";
import EventsExerciseOne from "./Event/Exercise-1(events)";
import EventsExerciseTwo from "./Event/Exercise-2(events)";
import EventsExerciseThree from "./Event/Exercise-3(events)";

function App() {
  return (
    <>
    <div>
    {/* 
    Stateless Components 
      <Warmup />
      <hr></hr>
      <ExerciseOne />
      <hr></hr>
      <ExerciseTwo />
      <hr></hr>
      <ExerciseThree />
    */}
    {/* Events */}
    <EventsWarmup/>
    <EventsExerciseOne/>
    <EventsExerciseTwo/>
    <EventsExerciseThree/>
    

    </div>

    </>
  );
}

export default App;
