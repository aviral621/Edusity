import React from 'react'
import './About.css'
import about_img from '../../../assets/about.png'
import play_icon from '../../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Edusity is a forward-thinking institution dedicated to empowering students through innovative education and cutting-edge research. Founded in 1975, Edusity has rapidly become a beacon of academic excellence, known for its commitment to fostering intellectual growth, creativity, and societal impact.</p>
        <p>Edusity offers an extensive selection of programs across undergraduate, graduate, and doctoral levels. Students can choose from more than 150 majors and minors, encompassing fields such as engineering, business, health sciences, arts, and humanities. The university’s distinguished faculty are leaders in their fields, bringing a wealth of knowledge and experience to the classroom.</p>
        <p>Edusity stands as a leader in modern education, offering a dynamic and inclusive environment where students can reach their full potential. Its unwavering commitment to academic excellence, research innovation, and community engagement makes it an ideal destination for aspiring scholars and future leaders.</p>
      </div>
    </div>
  )
}

export default About
