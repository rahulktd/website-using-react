import React from 'react'
import './Home.css'
import meta from '../../../assets/img/2.png'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../Courses/Courses'
import Plans from '../Plans/Plans'


function Home() {
    const handleClick=()=>{
        window.open('https://www.google.com','_blanck')
    }
  return (
    <>
    <section>
        <div className="container">

            <div className="home-container">
                <div className="home-content">

                    <h2 className='section_title'>Learn Everything for free</h2>
                    <p>Master everything.......................................</p>
                     <div className="home-btns">
                        <button className='register-btn' onClick={handleClick}>Get Started</button>
                        <button className='register-btn' onClick={handleClick}>Watch Now!</button>
                     </div>

                </div>
                <div className="home-img">
                    <div className="home-img-wrapper">
                        <div className="box-01">
                            <div className="box-img">
                                <img src={meta} alt="" />
                            </div>
                        </div>

                        <div className="whatsapp-container">
                            <h5>500+ members</h5>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className="support">
                            <h5>Active Support</h5>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    </section>
    <Courses/>
    <Plans/>
    </>
  )
}

export default Home