import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../scss/main.scss'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login-container">
            <div className="bg-image"></div>
    
                    <div className="input-container">
                        <h1>Plant Locker</h1>
                        <div>
                            <input type="text" name="username" placeholder="password" onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <input type="text" name="password" placeholder="username" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="login-btn-container">
                            <button className="login-button">Register</button>
                        </div>
                        <div>
                            <Link to='/'><button>Back</button></Link>
                        </div>
                    </div>
        </div>
    )


}

export default Register
