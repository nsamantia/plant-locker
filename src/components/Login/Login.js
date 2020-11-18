import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {loginUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

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
        <div>
            <input type="text" name="username" placeholder="password" onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" name="password" placeholder="username" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick ={()=>login()}>Login</button>

        </div>
    )

}

export default connect(null, {loginUser})(Login)