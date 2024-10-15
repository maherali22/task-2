import "./App.css";
import { useState } from "react";
import NumberInput from "./NumberInput";
import Display from "./Display";
function App() {
  const [number, setNumber] = useState("");
  return (
    <div className="App">
      <NumberInput setNumber={setNumber} />
      <Display number={number} />
    </div>
  );
}

export default App;
