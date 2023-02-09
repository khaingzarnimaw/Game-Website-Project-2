import React from 'react';
import {Button} from './Button';
import './Footer.css';

import {Link}from 'react-router-dom';

function Footer() {
  return (
    <div className= 'footer-container'>
      <section className='footer-subscription'>
       < p className='footer-subscription-heading'>
        Join the .......
        </p>

        < p className='footer-subscription-text'>
         You can unsubscribe at any time.
        </p>

        <div className='input-areas'>
            <form >
                <input 
                type='email' 
                name='email' 
                placeholder='khaingzarnimaw1996@gmail.com' 
                className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to=''>How it works</Link>
                <Link to=''>Testimonials</Link>
                <Link to=''>Careers</Link>
                <Link to=''>Investors</Link>
                <Link to=''>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact</h2>
                <Link to=''>How it works</Link>
                <Link to=''>Testimonials</Link>
                <Link to=''>Careers</Link>
                <Link to=''>Investors</Link>
                <Link to=''>Terms of Service</Link>
            </div>
        </div>

        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <Link to=''>Facebook</Link>
                <Link to=''>Instagram</Link>
                <Link to=''>Line</Link>
                <Link to=''>Twitter</Link>
            </div>
            
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link className='social-logo'>
                 Maw <i className='fab fa-typo3'/>
                </Link>
            </div>
            <big className='website-rights'>Maw ©2023</big>
            <div className='social-icons'>
              
                
              
            {/* <Link
              class='social-icon-link facebook'
              
              a href ="https://www.facebook.com/profile.php?id=100024764383626" target='_blank'
              aria-label='Facebook'
              
            >
              <i class='fab fa-facebook-f' />
              
            </Link> */}
            
            
            <a href="https://www.facebook.com/profile.php?id=100024764383626"
             target="_blank"
            aria-label = 'Facebook'
            class='social-icon-link facebook'
            >
             <i class='fab fa-facebook-f' />
            </a>
           
              
              
            <a href="https://www.instagram.com/youzi1752"
              target='_blank'
              aria-label='Instagram'
              class='social-icon-link instagram'
            >
              <i class='fab fa-instagram' />
            </a>


             
              
            <a href=""  
              target='_blank'
              aria-label='Line'
              class='social-icon-link line'
            >
              <i class='fab fa-line' />
            </a>

             <Link
              class='social-icon-link twitter'
              
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
             </Link>

             
            </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
