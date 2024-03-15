import React,{useState} from "react";
import google from './images/google.jpg';
import Facebook from './images/Facebook.jpg';

import "./reactform.css"
const ReactForm= () => {
  // eslint-disable-next-line no-unused-vars
  const [popupStyle, showPopup] = useState("hide") 
 const popup = () => {
   showPopup("login-popup")
   setTimeout(() => showPopup("hide"),3000)
    }

return(
  

    <div className ="cover">
    <h1>Login </h1>
    <input type="text" placeholder="username"/>
    <input type = "password" placeholder ="password" />

    <div className="login-btn" onClick={popup}>Login</div>

    <p className="text">or login using</p>

      <div className="alt-login">
        <div className="facebook"></div>
        <img src={Facebook} alt=""/>
        <div className="google"></div>
        <img src={google} alt=""/>
    
       </div>
    <div className={popupStyle}>
      <h3>Login Failed</h3>
      <p>Username or password incorrect</p>
    </div>
    </div>
    
  

  
     
)
}
export default ReactForm