import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/AI-1.jpg'

function AboutUs() {
  return (
    <div className='container'>

        <div className="about-us-container">
            <div className="team-members">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img className='member-image' src={miya} alt="member image" />
                    <h3 className='member-name'>member name</h3>
                    <p className='member-role'>Co-Founder</p>
                </div>

            </div>
            <div className="about-us-description">
                <h1 className='about-us-heading'>About Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quisquam error ad facere itaque ipsum delectus porro eum consectetur deserunt ea eligendi, illo, molestias officiis ex pariatur quaerat nesciunt cupiditate.</p>

            </div>
        </div>

    </div>
  )
}

export default AboutUs