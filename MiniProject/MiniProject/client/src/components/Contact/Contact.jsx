import React from 'react'
import './Contact.css'
import Vaishnavi from '../Assets/VgPhoto.png'
import Bhargavi from '../Assets/B.png'


export const Contact = () => {
  return (
   <body>
<main>
<h2>Our Team</h2>
        <section id="team">
            
            <div class="team-member">
                <img src={Vaishnavi} alt="Team Member 1"/>
                <h3>Vaishnavi Gholap</h3>
                <p>EmailId - vaishnavigholap2000@gmail.com</p>
            </div>
             <div class="team-member">
                <img src={Bhargavi} alt="Team Member 2"/>
                <h3>Bhargavi Meshram</h3>
                <p>Email Id-bhargavi.meshram@gmail.com</p>
            </div>
        </section>
    </main>
    </body> 
   
  )
}
export default Contact