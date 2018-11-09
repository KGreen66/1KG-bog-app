import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"
import Creature from "./components/Creature"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
              <Route exact path="/:id" component={Creature} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
