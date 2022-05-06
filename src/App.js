import "./App.css";
import Books from "./components/Book/Book";
import Person from "./components/Person/Person";

function App() {
  return (
    <div>
      <h1 className="App">Hello React</h1>
      <Person name="Aziz" age="20"> Assalomu alaykum </Person>
      <Person name="Husan" age="18" />
      <Books />
     </div>
  );
}


export default App;
