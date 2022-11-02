
import React from 'react'
import './SignUp.css'


function SignUp() {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Title'>CREATE AN ACCOUNT</div>
                <form>
                    <input
                        type="text"
                        placeholder="first name"
                        name="firstName"
                        id="firstName"
                        // onChange={inputChangeHandler}
                    />
                    <input
                        type="text"
                        placeholder="last name"
                        name="lastName"
                        id="lastName"
                        // onChange={inputChangeHandler}
                    />
                    <input
                        text="text"
                        placeholder="username"
                        name="userame"
                        id="username"
                        // onChange={inputChangeHandler}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        // onChange={inputChangeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="false"
                        // onChange={inputChangeHandler}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="confirm password"
                        autoComplete="false"
                        // onChange={inputChangeHandler}
                    />
                    <div className='Agreement'>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button>CREATE</button>
                </form>

            </div>
        </div>
    )
}

export default SignUp;