import React, { Component } from 'react'
import styled from 'styled-components'
import sass from '../images/logo.png'


const Container = styled.div`
width:100%;
justify-content:center;
align-items:center;
padding: 0% 0% 3% 0%;
margin:0 auto;
height:100%;
background:#1f1f1f;


`
const Heading = styled.h2`
color: white!important;
margin: 0px;
text-align: center;
`
const ContainerInner = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom:1%;
@media(min-width:768px){
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  margin-bottom:1%;
}
`

const Image = styled.img`
height:150px;
width:150px;
@media(max-width:425px){
  height:50px;
  width:50px;
}
@media(max-width:1024px){
  height:80px;
  width:80px;
}
`

const Text = styled.p`
padding: 0px;
color:aliceblue;
margin:0 auto;
text-align:center;
`

const Box = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
margin:0px 15px;
transition: 200ms ease-in
&:hover{
  transform:scale(1.40);
  margin:0px 15px;
}
@media(max-width:1024px){
  margin:15px 15px;
}
`

class Gallery extends Component {
  render() {
    return (
      <div className="row">
        <Container id="Hobbies">
          <Heading className="headings">Our Clients</Heading>
          <ContainerInner>
          <Box>
           <Image src={sass} alt="" width="100%"/>
          </Box>
          <Box>
           <Image src={sass} alt="" width="100%"/>
          </Box>
          <Box>
           <Image src={sass} alt="" width="100%"/>
          </Box>
          <Box>
           <Image src={sass} alt="" width="100%"/>
          </Box>
          <Box>
           <Image src={sass} alt="" width="100%"/>
          </Box>
           </ContainerInner>
        </Container>
      </div>
    );
  }
}
export default Gallery;