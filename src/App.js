import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Router>
      <div>
        <nav>
          <ul className="listMenu">
            <li>
              <Link to="/" className="aboutmeMenu">about me</Link>
            </li>
            <li>
              <Link to="/portfolio" className="portfolioMenu">portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="contactMenu">contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        
          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
