import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";

export default function SectionE1() {
  return <div>
    <Header name="Mark" />
    <Paragraph date="04-02-2024" />
  </div>;
}

/*
    1. Create a new Vite React project

    2. Create a Paragraph.jsx file that has a component
       that returns a <p /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component.

    3. Create a Header.jsx file that has a component
       that returns an <h1 /> with some text in it. However,
       make the text inside come from a prop passed in to
       the component.

    4. Create a Section.jsx file that composes one
       Header component with a Paragraph component
       below it while passing in some text to each
       as props

    5. Replace the <App /> in the main.jsx file with
       the <Section /> component above

    6. Check in your Browser to see if it works as expected
       (You should see your <h1> and <p> show up)
*/
