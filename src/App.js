import "./App.css";
import Nav from "./Components/Navigation/Nav";
// import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Main/Projects";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
//myrad pro
