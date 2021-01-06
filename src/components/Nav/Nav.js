import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'

const Nav = (props) => {


    //keeps users on session when they refresh the page
    useEffect(() => {
        axios.get(`/api/auth/getUser`)
        .then(res =>{
            props.loginUser(res.data)
        })
    }, [])

    return (

        <div>
            <div>
                <ul>
                    <Link to='./Landing'><li>Plant Locker</li></Link>
                    {/* <Link><Li></Li></Link>
                    <Link><Li></Li></Link> */}
                </ul>

            </div>

        </div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps,{loginUser})(Nav)