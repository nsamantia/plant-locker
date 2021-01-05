import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../scss/main.scss'

const Register = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const registerUser = () => {
        axios.post('/api/auth/register', {username, password, email})
            .then(res => {
            props.history.push('/login');
        }).catch(err => alert(err.message))
    }



    return(
        <div className="login-container">
            <div className="bg-image"></div>
    
                    <div className="input-container">
                        <h1>Plant Locker</h1>
                        <div>
                            <input type="text" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <input type="text" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <input type="text" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="login-btn-container">
                            <button className="login-button" onClick={()=>registerUser()}>Register</button>
                        </div>
                        <div>
                            <Link to='/'><button>Back</button></Link>
                        </div>
                    </div>
        </div>
    )


}

export default Register
