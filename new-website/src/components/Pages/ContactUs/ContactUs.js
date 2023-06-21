import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='container'>

        <div className="contact-us-container">

            <h1>Contact Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, provident ab delectus incidunt voluptas, sunt soluta earum enim optio maxime beatae officia esse veniam obcaecati eum odio? Inventore, placeat odit.</p>

            <form action="" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea type="message" id='message' name='message' row="5" required />
                </div>
                <button type='submit' className='submit-btn'>Submit</button>

            </form>
        </div>


    </div>
  )
}

export default ContactUs