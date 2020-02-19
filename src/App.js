import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import TextBanner from './components/TextBanner.jsx'
import Parallax from './components/Parallax.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import github from '../src/images/github.png'
import linkedin from '../src/images/linkedin.png'

function App() {

  const [State1] = useState([
    {key:"",
    heading:"About Us",
    paragraph1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio quisquam rerum velit, impedit inventore aliquam culpa cupiditate laborum quia dolor recusandae sapiente quasi, incidunt cum temporibus quas voluptates ullam debitis praesentium deleniti animi mollitia. Repellendus laboriosam nulla velit numquam? Aliquid aliquam tempore eveniet tempora molestias excepturi quia eos illum?",

}
  ]);
   
  return (
    <div className="App">
      <Nav id="Nav"/>

      <Jumbotron text='Copenhagen _' text2='Digital Agency' text3='Where Creativity Comes To Life'  />

      {State1.map((data, index) => (
            <TextBanner key={index}  heading={data.heading} paragraph1={data.paragraph1} />))}

      <Parallax heading='Skills'/>
    
      <Gallery/>
           <ContactMe/>
      <Footer link1={linkedin} link2={github}/>
    </div>
  );
}

export default App;
