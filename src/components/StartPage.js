import React from 'react'
import logo from './Images/logo.jpg'
import rider from './Images/rder1.jpg'
import fire from './Images/fire.png'
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    
    <div className="App">


 

       <div className='header'>
            <img src={logo} alt='' className='logo'/>
       <div className='Left-h'>

 
        <div></div>
        <span className='namebar'>Bike Dekho</span>
        <span className='the-best-ad'>the best bikes </span>
    
        <div>
        <div className='hero-text'>
          
            <div></div>
            <span className='stroke-text'>choose </span>
            <span>Your</span>
             <div>
                 <span>Dream through us</span>
             </div>
          
          </div>
      
            
          </div>

         <div  className="tagline">
         <span><b>
             I am here to help you to give information about your favorite bikes
             </b> </span>
         </div>

            {/* figures */}
     <div className='figures'>
       <div>
        <span>Kawasaki</span>
       </div>
      
       <div>
         <span>Harley Davidsone</span>
       </div>
     </div>
    
        </div>
       
 
     <ul className='header-menu'>
          <li>Home</li>
          <li>contact us</li>
          <li>Help</li>
          <li>About us</li>
        </ul>
    
    
     
      <div className='right-h'>
        <Link to="/resturant" className='btn' id="Explore Now">Explore now</Link>
        <img src={rider} alt='' className='hero-image'/>
    </div>
    <img src={fire} alt='' className='hero-image-back'/>
   </div>

    </div>

  )
}
