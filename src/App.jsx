// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
// import About from './Containers/About/About';
// import Footer from './Components/Footer/Footer';
// import Navbar from './Components/Navbar/Navbar';
// import Contact from './Containers/Contact/Contact';
import { Route, Routes } from 'react-router';
import Projects from './Containers/Projects/Projects';

// import ContactMe from './Containers/ContactMe/ContactMe';

function App() {
  return (
    <>
      <Routes className=" font-balooBhai">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
