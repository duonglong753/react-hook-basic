import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
function App() {
  const [name, setName] = useState("Long");
  const [input, setInput] = useState("");
  const handleEventOnClick = (event) => {
    setName(input);
    console.log(">>> click me", input);
  };
  const handleOnChange = (event) => {
    setInput(event.target.value);
    console.log(">>> input: ", event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world! {name}</h1>
        <input
          type="text"
          value={input}
          onChange={(event) => handleOnChange(event)}
        />
        <button type="button" onClick={handleEventOnClick}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
