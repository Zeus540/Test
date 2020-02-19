import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";
import pic from '../images/logo.png';

const Navbar = styled.div`
width: 100%;
border: none;
border-radius: 0px;
background: #202020;
margin: 0px!important;
z-index: 2;
color:white;
position: fixed;
display:flex;
@media(max-width:425px){
      flex-direction:column;
      justify-content: center;
      margin:0 auto;
  }
`

const List = styled.ul`
display: flex;
justify-content:center;
margin: 0px;
align-items: center;
@media(max-width:425px){
      padding:0px;
  }
`

const Logo = styled.img`
display: flex;
justify-content:center;
align-items: center;
align-self: center;
 width:4%;
    height:4%;
    padding:0px 2%;
@media(max-width:425px){
    width:20%;
    height:20%;
  }
`
const ListItem = styled.li`
list-style:none;
margin:0px 0px
padding:10px 10px;
transition: ease-in 200ms;
  &:hover {
  
    border-bottom:2px solid #FFA644;
  
}
    
`

class Nav extends Component {

render() { 
    return (
      <Navbar>
        <Logo src={pic} alt="" height="100%"/>
      <List>
      <ListItem>
        <Link
          activeClass="active"
          to="Nav"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Home
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Our Services
        </Link>
      </ListItem>
      <ListItem>
        <Link
          activeClass="active"
          to="Hobbies"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Our Clients
        </Link>  
      </ListItem>       
      <ListItem>
        <Link
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration= {350}
          >Contact Me
        </Link>
      </ListItem>
       
      </List>
      </Navbar>

  );
  }
}

export default Nav;
