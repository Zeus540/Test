import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
color: coral;
background: var(--secondary-color);
text-align: center;
`

const Heading = styled.h2`
color: white;
margin: 0px;
text-align: center;
`

const Para = styled.p`
max-width:80%
color:white
text-align:center
display:block
margin:0 auto;
@media(max-width:768px){
    max-width:80%
}
`

class TextBanner extends Component {
    render(){ 
        return ( 
            <Container>
                <Heading className="headings">{this.props.heading}</Heading>
                <Para>{this.props.paragraph1}</Para>
                <br/>
                <Para>{this.props.paragraph2}</Para>
            </Container>
        );
    }
}
 
export default TextBanner;