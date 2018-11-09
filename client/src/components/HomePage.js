import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CreatureStyle = styled.div`
  .big-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .creature-container {
    background-color: burlywood;
    border: 4px solid darkolivegreen;
    border-radius: 5px;
    width: 50vh;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    text-align: center;
    &:hover{
      color: darkolivegreen;
    }
  }
  .form-style button {
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    text-decoration: none;
    margin: 20px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #55acee;
    box-shadow: 0px 5px 0px 0px #3C93D5;
    &:hover{
      background-color: #6FC6FF
    }
  }
  `

class HomePage extends Component {
    state = {
        creatures: [],
        newCreature: {
            name: '',
            description: '',
            img: ''
        },
        toggleNew: true
    }

    getAllCreatures = () => {
      axios.get("/api/creatures").then((res) => {
        this.setState({ creatures: res.data });
        });
      };
    
    componentDidMount() {
      this.getAllCreatures();
    }
    
    handleChange = (event) => {
      const updatedNewCreature = {...this.state.newCreature}
      updatedNewCreature[event.target.name] = event.target.value
      this.setState({newCreature: updatedNewCreature})
    }

    handleSubmit = (event) => {
      event.preventDefault()
        //Make post to api to create new creature
      axios.post('/api/creatures', this.state.newCreature).then(res => {
          //When data is returned, navigate to the new creature page
          this.props.history.push(`/${res.data._id}`)    
      })
    }
    // Function for toggle on the input field
    toggleNewForm = () => {
      this.setState({
        toggleNew: !this.state.toggleNew,
      })
    }

  render() {
    return (
      <CreatureStyle>
        <h1>Choose a "Creature" to view</h1>
        <div className="big-container">
        {this.state.creatures.map(creature => (
          <div key={creature._id} className="creature-container">
            <Link to={`/${creature._id}`}>{creature.name}</Link>
            {/* <Link to={`/${creature._id}`}><img src={creature.img} alt=""/></Link> */}
          </div>
        ))}
        </div>
        <div className="form-style">
          <span>
            <button className="hide-button" onClick={this.toggleNewForm}>
              {/* ternary for the button to display either Hide or Create New Creature */}
                { this.state.toggleNew ? 'Hide' : 'Create A New Creature' }
            </button>
          </span>
          {/* ternary operator for the form to be shown or not */}
          {this.state.toggleNew ?
          <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Creature Name: </label>
                <input onChange={this.handleChange} value={this.state.newCreature.name} type="text" name="name" />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input onChange={this.handleChange} value={this.state.newCreature.description} type="text" name="description" />
            </div>
            <button type="submit">Create This Creature</button>
          </form>
          : null}
        </div>
      </CreatureStyle>
    )
  }
}

export default HomePage;
