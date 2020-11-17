import axios from 'axios'

const initialState = {
    user: {},
    isLoggedin: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(user){
    return{
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        padload: null
    }
}

export function getUser() {
    const payload = axios.get('/api/auth/getUser')

    return {
        type: GET_USER,
        payload: paload
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.paload, isLoggedin: true}
        case LOGOUT_USER:
            return initialState
        case GET_USER + '_PENDING':
            return {...state}
        case GET_USER + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        case GET_USER + '_REJECTED':
            return initialState
        default:
            return state
    }
}