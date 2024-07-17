import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Navbar/Programs/Programs'
import Title from './Components/Navbar/Title/Title'
import About from './Components/Navbar/About/About'
import Campus from './Components/Navbar/Campus/Campus'
import Testimonials from './Components/Navbar/Testimonials/Testimonials'
import Contact from './Components/Navbar/Contact/Contact'
import Footer from './Components/Navbar/Footer/Footer'
import VideoPlayer from './Components/Video Player/VideoPlayer'


const App = () => {

const [playState, setPlayState] = useState(false);



  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What We Offers'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
