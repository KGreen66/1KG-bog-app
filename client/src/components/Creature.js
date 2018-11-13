import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

class Creature extends Component {
  state = {

  }
  componentDidMount(){
    // Make an api call to get one single user
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({user: res.data})
    })
  }

  render() {
    return (
      <div className="creature-info-div">
        <h4>{this.props.name}</h4>
        <h5>Decription: {this.props.description}</h5>
        <img src={this.props.img}></img>
        <button>Delete</button>
      </div>    
    )
  }
}

export default Creature;
