import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact'>
            <button id='btn-contact'>Contact Us</button>
            <h2 data-aos="fade-up" data-aos-duration="1500">If You Have Any Query, Please FeelbspFree Contact Us</h2>
            <p data-aos="fade-up" data-aos-duration="1500">The contact form is currently inactive. Get a functional and working contact form with Ajax PHP in a few minutes. Just copy and paste the files, add a little <span><Link to='/contact'>Download Now.</Link></span></p>
            <form data-aos="fade-up" data-aos-duration="1500">
                <div id='info'>
                  <input id='yname' type='text'class="form-control" placeholder='Your Name'/>
                  <input id='yemail' type='text' class="form-control" placeholder='Your Email'/>
                </div>
                <input id='select' type='text' class="form-control" placeholder='Subject'/>
                <textarea id='area' class="form-control" placeholder='Message'></textarea>
                <button id='btn-send' class="form-control">Send Message</button>
            </form>

      </div>
    </div>
  )
}

export default Contact