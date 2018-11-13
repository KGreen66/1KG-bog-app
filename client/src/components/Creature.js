import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

class Creature extends Component {
  state = {
    creature: {}
  }
  componentDidMount(){
    // Make an api call to get one single user
    const creatureId = this.state.match.params.creatureId
    axios.get(`/api/creatures/${creatureId}`).then(res => {
      this.setState({creature: res.data})
    })
  }

  deleteThisCreature = (creatureId) => {
    axios.delete(`/api/creatures/${creatureId}`).then(() => {
      const newCreatures = [...this.state.creatures]
      const filtered = newCreatures.filter(creature => {
        return creature._id !== creatureId
      })
      this.setState({creatures: filtered})
    })
  }

  render() {
    return (
      <div className="creature-info-div">
        <h4>{this.props.name}</h4>
        <h5>Decription: {this.props.description}</h5>
        <img src={this.props.img} alt=""></img>
        <button onClick={this.deleteThisCreature}>Delete</button>
      </div>    
    )
  }
}

export default Creature;
