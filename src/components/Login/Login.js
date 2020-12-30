import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {loginUser} from '../../ducks/reducer'
import {connect} from 'react-redux'
import '../../scss/main.scss'
import logo from '../../assets/plant-locker.png'



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
            
            <div className="image-container">
                <h1>Digital storage for your plants</h1>
                <p>This app was created with the purpose of reducing plastic building up in landfills and spilling over into habitats. Gardening is a productive hobby and a great way to contribute to creating biodiversity in your yard. Unfortunately, there is a lot of plastic involved in gardening and I hope to eliminate plastic id tags by giving people the opportunity to store their plant information digitally.</p>
            </div>
                <div className="login-form-container">
                    <div><img src={logo}/></div>
                    <div className="input-container">
                        <div>
                            <input type="text" name="username" placeholder="password" onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <input type="text" name="password" placeholder="username" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="login-btn-container">
                        <button className="login-button" onClick ={()=>login()}>Sign in</button>
                    </div>
                </div>
            

        </div>
    )

}

export default connect(null, {loginUser})(Login)