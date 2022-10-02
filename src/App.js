import React from "react"; //i added this.
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  //this is not HTML but 'JSX', works like document.createElement.
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
