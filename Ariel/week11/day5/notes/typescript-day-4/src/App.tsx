import "./App.css";
import Heading from "./components/Heading";
import Section from "./components/Sections";
import Counter from "./components/Counter";
import { useState } from "react";
import Schindler from "./components/ListofComponents";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h2>Typescript Day4 Notes</h2>
      <Heading title="Pinky and the Brain" />
      <Section children={undefined} />
      <Counter setCount={setCount} count={0} children={undefined} />
      <Schindler item={["Tom", "Jerry", "Butch"]} />
    </>
  );
}

export default App;
