import React from "react";
import Navbar from "./NavBar/NavBar";
import Carousel from "./Carousel/Carousel";
import About from "./About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello!!</h1>
      <Carousel />
      <About />
    </div>
  );
}

export default App;
