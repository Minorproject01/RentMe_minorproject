import React from "react";
 import './SignIn.css'
const SignIn = () =>{
    return (
        <div className="outerContainer">
            <div className="innerContainer">
            <div className="innerestContainer">
            <h1>LOGIN</h1>
            <input type="email" placeholder="Enter your username email" /><br/>
            <input type="password" placeholder="Password" />
            <p>Forget your password ?</p>
            <button>login</button>
            </div>
            </div>
        </div>
    )
}
export default SignIn;



