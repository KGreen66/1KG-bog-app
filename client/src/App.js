import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import Creature from "./components/Creature"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

const MainStyle = styled.div`
  text-align: center;
  `

class App extends Component {
  render() {
    return (
      <Router>
        <MainStyle>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
              <Route exact path="/creatures/:creatureId" component={Creature} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
        </MainStyle>
      </Router>
    );
  }
}

export default App;
