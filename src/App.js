import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
function App() {
  const handleEventOnClick = (event) => {
    console.log(">>> click me", event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world!</h1>
        <input
          type="text"
          value="Long"
          onClick={(event) => handleEventOnClick(event)}
        />
        <button type="button" onClick={handleEventOnClick}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
