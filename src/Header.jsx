import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Accueil from './Home';
import Formulaire from './Form';

const Header = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/formulaire">Formulaire</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route path="/formulaire">
              <Formulaire />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Header;
