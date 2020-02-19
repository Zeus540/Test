import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width:calc(100%/4);
padding: 0px;
height: fit-content;
transition: ease-in 200ms;
margin:1%;
padding: 0px 20px;
background:transparent;
&:hover{
    transform:scale(1.05);
    background:#FFA644;
    box-shadow: #000000 18px 15px 24px 2px;
}
@media(max-width:425px){
    width:calc(100%/1.4);
    margin: 0 auto;
    margin-bottom:15%;
}

@media(min-width:769px) and (max-width:1440px) {
    width:calc(100%/6);
    margin-bottom:2%;
  
}
`

const Content = styled.div`
display: flex;
justify-content: center;

`

const Image = styled.img`
display:block;
margin:0 auto;
width:100%;
height:100%;
border:none;
width:calc(100%/3);
border-radius:0px 0px 7px 7px;
@media(min-width:426px) and (max-width:768px){
    margin: 0px;
    padding:0px;
    width:calc(100%/1);
}
`

const Heading = styled.h4`
text-align:center;
padding:10px;
padding:20px;
margin:0px;
transition:ease-in 200ms;
&:hover{
    transform:scale(1.2);
    text-decoration:underline;
}
`

const Anchor = styled.a`
    color:aliceblue;
    text-decoration:none;
    text-align:center; 
`

const Text= styled.div`
    color:aliceblue;
    text-decoration:none;
    text-align:center; 
`

const Des= styled.p`
    color:aliceblue;
    text-decoration:none;
    text-align:center; 
`

class Card extends Component {
   
    render() {
    return (        
        <Container>

            <Content>
                <Image src={this.props.img} alt={this.props.alt}/>
            </Content>
            
            <Heading>
                <Anchor href={this.props.Link} target="_blank" rel="noopener">{this.props.name}</Anchor>
            </Heading>

            <Text>
                <Des>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum quos nemo nihil obcaecati? Est itaque porro harum quasi impedit.
                </Des>
            </Text>
        </Container>  
        );
    }
}

export default  Card;
