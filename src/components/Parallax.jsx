import React, {useState,Fragment} from 'react';
import styled from 'styled-components';
import Jake from '../images/top.jpg'
import Card from './Card.jsx' 
import Addicts from '../images/react.png'
import Wolf from '../images/javascript.png'
import Drip from '../images/css.png'

const Container = styled.div`
background-attachment:fixed;
padding:0px;
background-image:url(${Jake});
background-size:100% 100%;
background-repeat:no-repeat;
@media(max-width:786px){
  background-size:cover;
  background-repeat:no-repeat;      
  }
`

const Heading = styled.h2`
text-align:center;
color:white;
margin:0px;
`

const Flexed = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin: 0 auto;
width: 100%;
@media(max-width:786px){
    flex-direction:column;
    justify-content: center;
    margin:0 auto;
}
`

const Overlay = styled.div`
background-color:#1716168c;
position:relative;
margin-top:0%;
left:0%;
top:-0px;
width:100%;
padding-bottom:4%;
@media (max-width:425px){
  height:100%;
}
`

function Parallax() {
 
  const [State] = useState([
    {name:"Responsive Design", message:"aasdasd", img:Drip, Link:"https://eloquent-morse-9094ed.netlify.com", alt:"image"},
    {name:"Seo", message:"aasdasd", img:Addicts, Link:"https://wolfpackmedia.netlify.com/",alt:"image"},
    {name:"Rottweiler Addicts", message:"aasdasd", img:Wolf, Link:"https://rottweiler.netlify.com/",alt:"image"},
    
  ]);
 
return(
   <div className="row">
        <Container  id="Skills">
            <Overlay>
            <Heading className="headings">Our Services</Heading>
            <Flexed >
            <Fragment  >
            {State.map((data, index) => (
            <Card key={index} name={data.name} message={data.message} img={data.img} Link={data.Link}  alt={data.alt}/>))}
           </Fragment>
           </Flexed>
            </Overlay>
        </Container>
        </div>
  );
}

export default Parallax;

