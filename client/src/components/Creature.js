import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const SingleStyles = styled.div`
  text-decoration: none;
  `

class Creature extends Component {
  state = {
    creatureDetails: {
      name: "",
      description: "",
      img: ""
    }
  };
  componentDidMount() {
    // Make an api call to get one single user
    const creatureId = this.props.match.params.creatureId;
    axios.get(`/api/creatures/${creatureId}`).then(res => {
      this.setState({ creatureDetails: res.data });
      console.log(creatureId);
    });
  }

  deleteThisCreature = creatureId => {
    axios.delete(`/api/creatures/${creatureId}`).then(() => {
      const newCreatures = [...this.state.creatureDetails];
      const filtered = newCreatures.filter(creature => {
        return creature._id !== creatureId;
      });
      this.setState({ creatureDetails: filtered });
    });
  };

  render() {
    return (
      <SingleStyles>
        <div>
          <h4>Creature Name: {this.props.name}</h4>
          <h5>Decription: {this.props.description}</h5>
        </div>
        <div>
          <img src={this.props.img} alt="" />
        </div>
        <button onClick={this.deleteThisCreature}>Delete</button>
      </SingleStyles>
    );
  }
}

export default Creature;
