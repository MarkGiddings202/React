import React from "react";
import "../src/App.css";
// Stateless-Components
import Warmup from "./Stateless-Components/Warmup";
import ExerciseOne from "./Stateless-Components/Exercise-1";
import ExerciseTwo from "./Stateless-Components/Exercise-2";
import ExerciseThree from "./Stateless-Components/Exercise-3";
// Event
import EventsWarmup from "./Event/Warmup(events)";
import EventsExerciseOne from "./Event/Exercise-1(events)";
import EventsExerciseTwo from "./Event/Exercise-2(events)";
import EventsExerciseThree from "./Event/Exercise-3(events)";
// Props
import Section from "./Props-&-Prop-Drilling/warmup/Section";
import SectionE1 from "./Props-&-Prop-Drilling/e1/SectionE1";
import SectionE2 from "./Props-&-Prop-Drilling/e2/SectionE2";
import SectionE3 from "./Props-&-Prop-Drilling/e3/SectionE3";
// useState
import Counter from "./UseState-Hook/Counter";
import Textbox from "./UseState-Hook/Textbox";
import Form from "./UseState-Hook/Form";
import Profile from "./UseState-Hook/ProfileFolder/Profile";

// Bonus
import UseStateBonus from "./UseState-Hook/UseStateBonus";
import Paragraph from "./Props-&-Prop-Drilling/Bonus/Paragraph";

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
        <hr></hr>
        <h2>Events</h2>
        <EventsWarmup />
        <hr></hr>
        <EventsExerciseOne />
        <hr></hr>
        <EventsExerciseTwo />
        <hr></hr>
        <EventsExerciseThree />
        <hr></hr>
        <h3>Props</h3>
        <h6>Warmup</h6>
        <Section />
        <hr></hr>
        <h6>E1</h6>
        <SectionE1 />
        <hr></hr>
        <h6>E2</h6>
        <SectionE2 />
        <hr></hr>
        <h6>E3</h6>
        <SectionE3 />
        <hr></hr>
        <Paragraph text={"text"}>
          <h1>Bonus</h1>
        </Paragraph>
      </div>
      <h3>useState</h3>
      <hr></hr>
      <h6>Warmup</h6>
      <Counter />
      <hr></hr>
      <h6>E1</h6>
      <Textbox/>
      <hr></hr>
      <h6>E2:form</h6>
      <Form/>
      <hr></hr>
      <h6>E3</h6>
      <Profile/>
      <hr></hr>
      <h6>Bonus</h6>
      <UseStateBonus />
    </>
  );
}

export default App;
