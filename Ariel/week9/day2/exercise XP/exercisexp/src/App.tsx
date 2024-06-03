import { useState } from "react";
import "./App.css";
import Car from "./Components/Car";

function App() {
  const [count, setCount] = useState(0);
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <Car carInfo={carInfo} />
    </>
  );
}

export default App;
