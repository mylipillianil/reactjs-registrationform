import React from 'react'
import './loginsignup.css'
import  mail_icon from './mail icon.png'
import  user_icon from './user icon.jpeg'
import  phone_icon from './phone icon.png'
import  password_icon from './password icon.png'

const loginsignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">sign up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
        <img src={user_icon} alt="" />
        <input type="First name" placeholder= 'Firstname' />
        </div>
         </div>

         <div className="inputs">
        <div className="input">
        <img src={user_icon} alt="" />
        <input type="last name" placeholder='Last name' />
        </div>
         </div>

         <div className="inputs">
        <div className="input">
        <img src={phone_icon} alt="" />
        <input type="phone number" placeholder='phone no' />
        </div>
         </div>


         <div className="inputs">
        <div className="input">
        <img src={mail_icon} alt="" />
        <input type="Email" placeholder='Email' />
        </div>
         </div>

         <div className="inputs">
        <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='password' />
        </div>
         </div>

         <div className="inputs">
        <div className="input">
        <img src={password_icon} alt="" />
        <input type="confrimation password" placeholder='confrimation password'/>
        </div>
         </div>

         <div className="submit-container">
            <div className="submit">submit</div>
         </div>



        
      
    </div>
  )
}

export default loginsignup
