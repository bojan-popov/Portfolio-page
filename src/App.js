import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Contact from "./Components/Contact/Contact";
import Mentorship from "./Components/Mentorship/Mentorship";
import Nav from "./Components/Navigation/Nav";
import Footer from "./Components/Footer/Footer";

import Project1 from "./Components/Projects/Project1";
import Project2 from "./Components/Projects/Project2";
import Project3 from "./Components/Projects/Project3";
import Project4 from "./Components/Projects/Project4";
import Project5 from "./Components/Projects/Project5";
import Project6 from "./Components/Projects/Project6";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/info" component={Info} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentorship" component={Mentorship} />
          <Route path="/project1" exact component={Project1} />
          <Route path="/project2" exact component={Project2} />
          <Route path="/project3" exact component={Project3} />
          <Route path="/project4" exact component={Project4} />
          <Route path="/project5" exact component={Project5} />
          <Route path="/project6" exact component={Project6} />
        </Switch>
        <Footer />
      </AnimatePresence>
    </Router>
  );
}

export default App;
//myrad pro
