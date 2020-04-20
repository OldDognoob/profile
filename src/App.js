import React from "react";
import Navbar from "./NavBar/NavBar";
import Carousel from "./Carousel/Carousel";
import About from "./About/About";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <Profile/>
    </div>
  );
}

export default App;
