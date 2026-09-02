import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./pages/Navbar";
import Student from "./components/Student";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="/student/:id" element={<Student />} />
      </Routes>
    </>
  );
};

export default App;
