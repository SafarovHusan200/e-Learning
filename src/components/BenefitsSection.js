import React from 'react'
// import images
import homeIntro2 from "../img/home_Intro2.jpg"

function BenefitsSection() {
  return (
    <div className='benefits'>
        <div className="description">
            <h2>High quality learning system</h2>
            <div className="benefit">
                <h3>online Platform</h3>
                <h3>Higth experienced and talanted mentors</h3>
                <h3>Fast learning </h3>
                <h3>Offline school for children</h3>
            </div>
        </div>
        <img src={homeIntro2} alt="a girl in lobaratory" />
    </div>
  )
}

export default BenefitsSection