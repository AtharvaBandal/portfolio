import React from "react";
import {Navbar} from "./components/navbar";
import { Home } from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
       
        
        
    </div>
  );
}

export default App;
