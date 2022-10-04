import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function App() {
  //this is not HTML but 'JSX', works like document.createElement.
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]); //here the initial state is estabilshed with 'setCurrentCategory' to change the state(to a different index of the array?) when needed
  //use state can have a function as an argument too.  Won't re-process this state each time.

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory} />
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
