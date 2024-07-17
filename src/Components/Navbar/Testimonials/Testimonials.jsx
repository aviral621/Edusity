import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../../assets/next-icon.png'
import back_icon from '../../../assets/back-icon.png'
import user_1 from '../../../assets/user-1.png'
import user_2 from '../../../assets/user-2.png'
import user_3 from '../../../assets/user-3.png'
import user_4 from '../../../assets/user-4.png'

const Testimonials = () => {


    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx>-50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx<0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
    


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
<ul ref={slider}>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                    <h3>Smriti Khurana</h3>
                    <span>Edusity, USA</span>
                </div>
            </div>
            <p>Choosing to persue my degree at Edusity was one of the best decison I've ever made. The supportive community, state-of-art facilities, and comitment to academic excellence have truly exceeded my expectations</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                </div>
            </div>
            <p>The institution is the best place indeed the second home. It gives me numerous opportunities to get the best exposure and at the same time some cherished life lessons. On one hand it gives a glimpse of the corporate, on the other it teaches a lot about people and life.</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>Suhana Jacob</h3>
                    <span>Edusity, USA</span>
                </div>
            </div>
            <p>he infrastructure is very good.they have a big library , a nice place to sit in the college…The study pattern of the college is good the teachers are nice and cooperative.they arrange educational trips to other places so that the student as a exposure to the outer environment. They provide live session..
            The locality is safe, there are proper security measures and guards.</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                    <h3>Tim Paine</h3>
                    <span>Edusity, USA</span>
                </div>
            </div>
            <p>The education of this college is very good and the teacher staff here helps a lot. And all these activities are done and the student is motivated.</p>
        </div>
    </li>
</ul>
      </div>
    </div>
  )
}

export default Testimonials
