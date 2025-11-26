import React from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

  const [currState, setCurrState] = React.useState("Login");

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-tittle">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"? <></>: <input type="text" placeholder='Your Name' required />}
          
          <input type="email" placeholder='Your Email Address' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button type='submit' className='login-popup-submit-btn'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currState==='Login'?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
