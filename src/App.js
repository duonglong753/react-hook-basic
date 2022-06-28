import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
function App() {
  const [name, setName] = useState("Long");
  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([
    { id: "todos1", title: "watching tv" },
    { id: "todos2", title: "doing homework" },
    { id: "todos3", title: "playing game" },
  ]);
  const handleEventOnClick = (event) => {
    if (!input) {
      alert("empty input!");
      return;
    }
    //hook doesn't merge state so we use spread syntax array
    let newtodo = { id: "abc", title: input };
    setToDos([...todos, newtodo]);
    setInput("");
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
        <div className="todos-container">
          {todos.map((todo) => {
            console.log(">>> check todo list:", todo);
            return (
              <li className="todos-child" key={todo.id}>
                {todo.title}
              </li>
            );
          })}
        </div>
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
