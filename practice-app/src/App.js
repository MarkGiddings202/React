import React from "react";

import Warmup from "./Stateless-Components/Warmup";
import ExerciseOne from "./Stateless-Components/Exercise-1";
import ExerciseTwo from "./Stateless-Components/Exercise-2";
import ExerciseThree from "./Stateless-Components/Exercise-3";

import EventsWarmup from "./Event/Warmup(events)";
import EventsExerciseOne from "./Event/Exercise-1(events)";
import EventsExerciseTwo from "./Event/Exercise-2(events)";
import EventsExerciseThree from "./Event/Exercise-3(events)";

import WarmUpProps from "./Props-&-Prop-Drilling/WarmUpProps";
import ExerciseOneProps from "./Props-&-Prop-Drilling/Exercise-1-props";
import ExerciseTwoProps from "./Props-&-Prop-Drilling/Exercise-2-props";

import ExerciseThreeProps from "./Props-&-Prop-Drilling/Exercise-3-props";
import BonusExProps from "./Props-&-Prop-Drilling/Bonus-e1-props";


import '../src/App.css'

function App() {
  return (
    <>
      <div id="Homepage">
        <h1>React Practice</h1>
        <hr></hr>
        <h2>Stateless Components</h2>
        <Warmup />
        <hr></hr>
        <ExerciseOne />
        <hr></hr>
        <ExerciseTwo />
        <hr></hr>
        <ExerciseThree />

        <h2>Events</h2>
        <EventsWarmup />
        <hr></hr>
        <EventsExerciseOne />
        <hr></hr>
        <EventsExerciseTwo />
        <hr></hr>
        <EventsExerciseThree />

        <h3>Props</h3>
        <WarmUpProps  />
        <hr></hr>
        <ExerciseOneProps/>
        <hr></hr>
        <ExerciseTwoProps />
        <hr></hr>
        <ExerciseThreeProps/>
        <hr></hr>
        <BonusExProps/>
      </div>
    </>
  );
}

export default App;
