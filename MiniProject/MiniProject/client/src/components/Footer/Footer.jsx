import React from 'react'
import './Footer.css'


export const Footer = () => {
  return (
    <div className='footer'>
          <div className='footer-content'>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyrights @ 2024-All Right Reserve</p>
            <p>Meal Planner & Grocery List Generator</p>
        </div>
        </div>
           <div className='footer-content'>
         <h4>Follow Us :</h4>
         <div className='social-icons' >
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              </div>
       </div>
    </div>
  )
}
export default Footer



