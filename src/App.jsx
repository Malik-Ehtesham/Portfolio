import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home/Home";
import Projects from "./Containers/Projects/Projects";
import Skills from "./Containers/Skills/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/> <Route path="/projects" element={<Projects />}/> <Route path="/skills" element={<Skills />}/>
    </Routes>
   
  );
}

export default App;
