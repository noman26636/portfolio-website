
import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";

function App() {
  return (
    <>
    <Router>
    <NavMenu/>
    <Routes>
       
       <Route path="/about" element={<About/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/contact" element={<Contact/>}/> 
       <Route path="/" element={<Home/>}/> 
       
     
         
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
