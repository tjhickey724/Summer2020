import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./components/About";
import FontDemo from "./components/FontDemo";
import Home from "./components/Home";


export default function App() {
  return (
    <Router>
    <div className='container-fluid'>

          <ul className="nav">
            <li className="navItem">
              <Link to="/">Home&nbsp;</Link>
            </li>
            <li className="navItem">
              <Link to="/about">About&nbsp;</Link>
            </li>
            <li className="navItem">
              <Link to="/fontDemo">FontDemo</Link>
            </li>
          </ul>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/fontDemo">
            <FontDemo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
