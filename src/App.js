import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import ToDo from "./views/ToDo";
import Covid from "./views/Covid";
function App() {
  const [name, setName] = useState("Long");
  const [input, setInput] = useState("");
  const [todos, setToDos] = useState([
    { id: "todos1", title: "watching tv", type: "Long" },
    { id: "todos2", title: "doing homework", type: "Long" },
    { id: "todos3", title: "playing game", type: "abc" },
    { id: "todos4", title: "reading books", type: "abc" },
  ]);

  useEffect(() => {
    console.log("run useEffect");
  }, [input]);

  useEffect(() => {
    console.log("run useEffect todos");
  }, [todos]);

  const handleEventOnClick = (event) => {
    if (!input) {
      alert("empty input!");
      return;
    }
    //hook doesn't merge state so we use spread syntax array
    let newtodo = {
      id: Math.floor(Math.random() * 10000 + 1),
      title: input,
      type: "Long",
    };
    setToDos([...todos, newtodo]);
    setInput("");
  };
  const handleOnChange = (event) => {
    setInput(event.target.value);
    console.log(">>> input: ", event.target.value);
  };
  const deleteTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setToDos(currentTodo);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world! {name}</h1>
        <Covid />
        {/* <ToDo data={todos} title={"all todos"} deleteTodo={deleteTodo} />
        <ToDo
          data={todos.filter((item) => item.type === "Long")}
          title={"Long's todos :"}
          deleteTodo={deleteTodo}
        /> */}
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
