import React from 'react'
import './Footer.css'
import footer from '../../assets/img/1.png'
import { Link } from 'react-router-dom'


function Footer() {
    const handleClick=()=>{
        window.scrollTo(0,0);
    }
  return (
    <footer className='footer'>

        <div className="container">
            <div className="footer_wrapper">

                <div className="footer-box">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={footer} alt="" />
                        </div>
                        <h2>WEBSITE</h2>
                    </div>
                    <p>Hi, how are you?</p>
                </div>

                <div className="footer-box">
                    
                        <h4 className="footer_title">Company</h4>
                        <ul className='footer_links'>
                        <li>
                            <Link to='/courses' onClick={handleClick}>Our Program</Link>
                            </li>
                        <li><Link to='/services' onClick={handleClick}>Our Plans</Link></li>
                         <li><Link onClick={handleClick}>Become a member</Link></li>
                        </ul>
                    
                </div>

                <div className="footer-box">
                
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className='footer_links'>
                        <li> <Link to='/about' onClick={handleClick}>About Us </Link> </li>
                        <li> <Link to='/contact' onClick={handleClick}> Contact Us</Link> </li>
                       <li><Link to='/support' onClick={handleClick}> <li>Support Us</li></Link></li> 
                        </ul>
                    
                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer