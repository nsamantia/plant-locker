import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {loginUser} from '../../ducks/reducer'
import {connect} from 'react-redux'
import '../../scss/_login.scss'
import logo from '../../assets/plant-locker.png'
import {Link} from 'react-router-dom'



const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const login = () =>{
        axios.post(`/api/auth/login`, {username, password})
        .then(res => {
            props.loginUser(res.data)
            props.history.push('/Landing')
        }).catch(err => console.log(err.message))

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
                        <div className="login-btn-container">
                            <button className="login-button" onClick ={()=>login()}>Sign in</button>
                        </div>
                        <div>
                            <Link to='/'><button>Back</button></Link>
                        </div>
                    </div>
                
            

        </div>
    )

}

export default connect(null, {loginUser})(Login)