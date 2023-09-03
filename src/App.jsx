import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import Projects from './Containers/Projects/Projects';
import Skills from './Containers/Skills/Skills';
// import ContactMe from './Containers/ContactMe/ContactMe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      {/* <Route path="/contactme" element={<ContactMe />} /> */}
    </Routes>
  );
}

export default App;
