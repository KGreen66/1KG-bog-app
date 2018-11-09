import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarStyles = styled.div`
    background-color: burlywood;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 5px solid darkgreen;

    a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        padding: 15px;
        &:hover{
            color: red;
        }
    }
    `

class Navbar extends Component{
    render(){
        return(
            <NavbarStyles>
                <Link to='/'><h1>Swamp Monsters</h1></Link>
            </NavbarStyles>
        )
    }
}

export default Navbar